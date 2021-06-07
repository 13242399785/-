module.exports = app => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../../models/AdminUser')
/**
 * 登录对象
 * @typedef Login
 * @property {string} username.required - Some description for login - eg:admin
 * @property {string} password.required - Some description for login - eg:000000
 */
/**
 * 列表
 * @route post /admin/api/login
 * @group 登录 - Operations about 登录接口
 * @summary 登录 
 * @param {Login.model} login.body.required - the new login
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    assert((username || password), 422, '请输入用户名和密码')

    //1.通过用户名查询用户是否存在
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户名不存在')

    //2.校验密码
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')

    //3.返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({
      message: '登陆成功',
      token
    })
  })

}