import { GUID_req } from '../request'

//新建目录
function createCate(data) {
  return GUID_req({
    url: '/catalog',
    method: 'post',
    data
  })
}

//根据id查找目录(读取)
function getCate(cateId) {
  return GUID_req({
    url: `/catalog/${cateId}`
  })
}

//编辑提交目录
function updateCate(cateId, data) {
  return GUID_req({
    url: `/catalog/${cateId}`,
    method: 'put',
    data
  })
}

//删除目录
function deleteCate(cateId) {
  return GUID_req({
    url: `/catalog/${cateId}`,
    method: 'delete'
  })
}

//获取目录列表
function getCateList() {
  return GUID_req({
    url: '/catalog'
  })
}

export {
  createCate,
  getCate,
  updateCate,
  deleteCate,
  getCateList
}