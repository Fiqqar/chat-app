<template>
    <div>
        <h3>Please login with your google account</h3>
        <button @click="login">Login with email</button>
        <button @click="register">Register with email</button>
        <modal v-if="showModal" @close="showModal = false">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="username" class="text-info">Username:</label><br>
                                    <input type="text" name="username" id="username" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-info">Password:</label><br>
                                    <input type="text" name="password" id="password" class="form-control">
                                </div>
                            </div>

                            <div class="modal-footer">
                                <div class="form-group">
                                    <label for="remember-me" class="text-info"><span>Remember me</span><span><input
                                                id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                                </div>
                                <div id="register-link" class="text-right">
                                    <a href="#" class="text-info">Register here</a>
                                    <button class="btn btn-danger btn-md" @click="$emit('close')">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </modal>
    </div>
</template>

<script>
// import * as firebase from 'firebase/compat/app'; 
export default {
    props: {
        showModal: false,
    },
    methods: {
        login() {
            this.showModal = true;
        },
        register() {
        }
    }
}
</script>

<style>
#login .container #login-row #login-column #login-box {
    margin-top: 120px;
    max-width: 600px;
    height: 320px;
    border: 1px solid #9C9C9C;
    background-color: #EAEAEA;
}

#login .container #login-row #login-column #login-box #login-form {
    padding: 20px;
}

#login .container #login-row #login-column #login-box #login-form #register-link {
    margin-top: -85px;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>