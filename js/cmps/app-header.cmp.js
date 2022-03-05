export default {
    template:`
        <header class="app-header space-around">
            <div class="logo align-center">
                <img src="../../../../logo/appsus-logo.png" class="appsus-logo"> </img>
                <h3>appSus</h3>
            </div>
            <nav class="nav-bar space-around ">
                <router-link to="/">Home</router-link>
                <!-- <router-link to="/notes-app">Apps</router-link> -->
                <!-- <router-link to="/book-app" >Book App</router-link> -->
                <router-link to="/mail-app" >Mail</router-link>
                <router-link to="/keep-app" >Keep</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </header>
    
    `
}