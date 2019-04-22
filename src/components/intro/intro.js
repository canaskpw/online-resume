import VanillaTilt from 'vanilla-tilt'
import Clipboard from 'clipboard'

export default {
    data(){
        return {
            avatarUrl: 'background-image: url(' + require('../../static/img/avatar.jpg') + ');',
            bluebgUrl: 'background-image: url(' + require('../../static/img/bluebg.jpg') + ');',
            innerWidth: window.innerWidth,
        }
    },
    methods:{

    },
    mounted(){
        let avatar = document.querySelector(".avatar")
        if (this.innerWidth >= 500) {
            VanillaTilt.init(avatar, {
                scale: 1.3,
            });
        }
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
