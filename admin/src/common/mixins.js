//上传混入\
import axios from 'axios'
var nowUrl='https://huazai.loca.lt'
if(process.env.NODE_ENV === 'production') {
  axios.get('./url.txt').then(function(res){
    nowUrl=res.data;//后台api地址
  }).catch((error) => {
    console.error(error);
  });
}
export const uploadMixin = {
  computed: {
    action() {
      return process.env.VUE_APP_API_URL_UPLOAD || nowUrl+'/admin/api/upload/'
    },
    token() {
      const token = sessionStorage.getItem('token')
      if (token) return { Authorization: token }
      return {}
    }
  },
  methods: {
    uploadErrHandler(res) {
      if (res.status === 401) {
        this.$message.error('请先登录')
        router.push('/login')
      }
    }
  }

}