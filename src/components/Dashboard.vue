<template>
    <div id="dashboard">
        {{name}}
        {{title}}
    </div>
</template>

<script>
const fb = require('../firebaseConfig.js')
export default {
   el: '#dashboard',
	data() {
        name: 'John Smith',
        title: 'Support staff',
    }  
}
</script>
