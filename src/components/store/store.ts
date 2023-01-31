import { createStore } from "vuex";
import { heroModule } from "./heroModule";

export default createStore({
    modules:{
        post: heroModule
    }
})