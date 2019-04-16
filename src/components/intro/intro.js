import VanillaTilt from 'vanilla-tilt'
import {MessageBox} from 'element-ui'
import Clipboard from 'clipboard'
import Button from '@/components/button.vue'

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
                    <div class='contactList'>
                        <span class='m-bold'>email: </span>
                        <span class='m-hightlight m-pointer content' id='email'>cyitao@foxmail.com</span>
                        <span></span>
                    </div>
                    <div class='contactList'>
                        <span class='m-bold'>QQ: </span>
                        <span class='m-hightlight m-pointer content' id='qq'>285345240</span>
                        <span></span>
                    </div>
                    <div class='contactList'>
                        <span class='m-bold'>phone & wechat: </span> 
                        <span class='m-hightlight m-pointer content' id='phone'>17767212383</span>
                        <span></span>
                    </div>
                `,
                dangerouslyUseHTMLString: true,
            }).catch(() => {})
            new Clipboard('.contactList .content', {
                target: function(trigger) {
                    console.log(trigger);
                    let copied = trigger.nextElementSibling
                    copied.textContent = ' 已复制'
                    console.log(trigger.textContent);
                    return trigger
                }
            })
            
        },
    },
    mounted(){
        let avatar = document.querySelector(".avatar")
        VanillaTilt.init(avatar, {
            glare: true,
            scale: 1.3,
        });
        // let pdf = document.querySelector(".pdf")
        // VanillaTilt.init(pdf,{

        // });
      },
      components: {
          Button,
      }
}
