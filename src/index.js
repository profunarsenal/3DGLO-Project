import timer from "./modules/timer"
import menu from "./modules/menu"
import modal from "./modules/modal"
import scroll from "./modules/scroll"
import validation from "./modules/validation"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc"
import sendForm from "./modules/sendForm"

timer('22 may 2022')
menu()
modal()
scroll()
validation()
tabs()
slider('.portfolio-content', '.portfolio-item')
calc()
sendForm('form1')
sendForm('form2')
sendForm('form3') 