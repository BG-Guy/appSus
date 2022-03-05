export default {
    template:`
        <header class="app-header space-around">
            <div class="logo align-center">
                <img src="../../../../logo/appsus-logo.png" class="appsus-logo"> </img>
                <h3>appSus</h3>
            </div>
            <nav class="nav-bar space-around ">
                <transition 
                mode="out-in"
                enter-active-class="animate_animated animate__fadeIn"
                leave-active-class="animate_animated animate_fadeOut"
                > 
                <router-link to="/">Home</router-link>
        </transition>
                
                <router-link to="/mail-app" >Mail</router-link>
                <router-link to="/keep-app" >Keep</router-link>
            </nav>
        </header>
    
    `
}