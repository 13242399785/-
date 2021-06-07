module.exports = (app, multer) => {
  const express = require('express')
  const router = express.Router()
// const MAO = require('multer-aliyun-oss')
  const auth = require('../../middlleware/validateMiddleWear')
  const access = require('../../middlleware/access')

  app.use('/admin/api/upload', auth(app), access(app), router)

  //物品图片上传
  const item = multer({
    dest: __dirname + '/../../uploads/items'
    // 替换为阿里云存储
  //   storage: MAO({
  //     config: {
  //         region: 'oss-cn-beijing',
  //         accessKeyId: 'LTAI4G5Nk12EQWfEajo9gEAD',
  //         accessKeySecret: 'qpLegIjTQCYeWx81AmxwMflmUTVjTl',
  //         bucket: 'my-moba'
  //     }
  // })
  })
  let BaseUrl='http://192.168.5.147:3333'
  router.post('/item', item.single('file'), async (req, res) => {
    const file = req.file
    file.url = `${BaseUrl}/uploads/items/${file.filename}`
    // file.url = `http://localhost:3333/uploads/items/${file.filename}`
    res.send(file)
  })

  // 英雄头像上传
  const hero = multer({ dest: __dirname + '/../../uploads/heros' })
  router.post('/hero', hero.single('file'), async (req, res) => {
    const file = req.file
    file.url = `${BaseUrl}/uploads/heros/${file.filename}`
    // file.url = `http://localhost:3333/uploads/heros/${file.filename}`
    res.send(file)
  })

  // 技能图标上传
  const skill = multer({ dest: __dirname + '/../../uploads/skills' })
  router.post('/skill', skill.single('file'), async (req, res) => {
    const file = req.file
    file.url = `${BaseUrl}/uploads/skills/${file.filename}`
    // file.url = `http://localhost:3333/uploads/skills/${file.filename}`
    res.send(file)
  })

   // 皮肤上传
   const skin = multer({ dest: __dirname + '/../../uploads/skins' })
   router.post('/skin', skin.single('file'), async (req, res) => {
     const file = req.file
     file.url = `${BaseUrl}/uploads/skins/${file.filename}`
    //  file.url = `http://localhost:3333/uploads/skins/${file.filename}`
     res.send(file)
   })
   // 视频上传
   const introduction = multer({ dest: __dirname + '/../../uploads/introductions' })
   router.post('/introduction', introduction.single('file'), async (req, res) => {
     const file = req.file
     file.url = `${BaseUrl}/uploads/introductions/${file.filename}`
    //  file.url = `http://localhost:3333/uploads/introductions/${file.filename}`
     res.send(file)
   })

  // 文章图片上传
  const article = multer({ dest: __dirname + '/../../uploads/articles' })
  router.post('/article', article.single('file'), async (req, res) => {
    const file = req.file
    file.url = `${BaseUrl}/uploads/articles/${file.filename}`
    // file.url = `http://localhost:3333/uploads/articles/${file.filename}`
    res.send(file)
  })

  // 广告位图片上传
  const ad = multer({ dest: __dirname + '/../../uploads/ads' })
  router.post('/ad', ad.single('file'), async (req, res) => {
    const file = req.file
    file.url = `${BaseUrl}/uploads/ads/${file.filename}`
    // file.url = `http://localhost:3333/uploads/ads/${file.filename}`
    res.send(file)
  })
}