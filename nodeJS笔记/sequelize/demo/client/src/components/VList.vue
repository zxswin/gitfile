<template>
    <div class="mb">
        <div class="list" v-for="content of contents">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{content.title}}</h5>
                <small>2018/09/17</small>
            </div>
            <p class="mb-1">
                {{content.content}}
            </p>
            <footer class="text-right">
                <small>赞（{{content.like_count}}）</small>
                <small>回复（{{content.comment_count}}）</small>
                <a href="">我要回复</a>
            </footer>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            count: 0,
            contents: []
        }
    },
    created() {
        axios({
            method: 'get',
            url: '/api/'
        }).then( rs => {
            if (!rs.code) {
                this.count = rs.data.count;
                this.contents = rs.data.data;
            }
        } );
    }
}
</script>
