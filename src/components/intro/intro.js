import VanillaTilt from 'vanilla-tilt'
import {MessageBox} from 'element-ui'
import Clipboard from 'clipboard'

export default {
    data(){
        return {
            avatarUrl: 'background-image: url(' + require('../../static/img/avatar.jpg') + ');',
            bluebgUrl: 'background-image: url(' + require('../../static/img/bluebg.jpg') + ');',

        }
    },
    methods:{
        // showContact(){
        //     MessageBox({
        //         title: '点击复制联系方式',
        //         message: 
        //         `
        //         `,
        //         dangerouslyUseHTMLString: true,
        //     }).catch(() => {})
            
            
        // },
    },
    mounted(){
        let avatar = document.querySelector(".avatar")
        VanillaTilt.init(avatar, {
            scale: 1.3,
        });
        new Clipboard('.condition', {
            target: function(condition) {
                let copy = condition.querySelector('.copy')
                copy.textContent = '已复制'
                setTimeout(() => {
                    copy.textContent = ''
                }, 3000);
                let text = condition.querySelector('.text')
                return text
            }
        })
      },
      components: {
        
      }
}
