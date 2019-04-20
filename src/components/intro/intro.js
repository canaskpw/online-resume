import VanillaTilt from 'vanilla-tilt'
import {MessageBox} from 'element-ui'
import Clipboard from 'clipboard'

export default {
    data(){
        return {

        }
    },
    methods:{
        showContact(){
            MessageBox({
                title: '点击复制联系方式',
                message: 
                `
                    <div class='email contactList'>
                        <span class='m-bold name'>email: </span>
                        <span class='m-hightlight m-pointer content' id='email'>cyitao@foxmail.com</span>
                        <span></span>
                    </div>
                    <div class='qq contactList'>
                        <span class='m-bold name'>QQ: </span>
                        <span class='m-hightlight m-pointer content' id='qq'>285345240</span>
                        <span></span>
                    </div>
                    <div class='phone contactList'>
                        <span class='m-bold name'>phone & wechat: </span> 
                        <span class='m-hightlight m-pointer content' id='phone'>17767212383</span>
                        <span></span>
                    </div>
                `,
                dangerouslyUseHTMLString: true,
            }).catch(() => {})
            new Clipboard('.contactList .content', {
                target: function(trigger) {
                    trigger.nextElementSibling.textContent = ' 已复制'
                    return trigger
                }
            })
            
        },
    },
    mounted(){
        let avatar = document.querySelector(".avatar")
        VanillaTilt.init(avatar, {
            scale: 1.3,
        });
        // let pdf = document.querySelector(".pdf")
        // VanillaTilt.init(pdf,{

        // });
      },
      components: {
        
      }
}
