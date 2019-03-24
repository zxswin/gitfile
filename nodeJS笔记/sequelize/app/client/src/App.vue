<template>
  <div class="container">

        <v-header></v-header>

        <v-list></v-list>

        



        <div class="modal" style="display: -block">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">xxxxxxxxxx</h5>
                            <button type="button" class="close">
                                <span>&times;</span>
                            </button>
                        </div>
    
                        <div class="modal-body">
    
                            <!-- 回复 -->
                            <form>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <textarea class="form-control" id="username" placeholder="回复内容……" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                            </form>
    
                        </div>
    
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">回复</button>
                            <button type="button" class="btn btn-secondary">取消</button>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
/**
 * 为了纪录和传递用户身份，每次请求的时候服务器清楚当前这次的客户端是什么身份
 * 
 * cookie
 *  1. cookie其实是通过头信息传递的一个数据（这个数据也定义了名称）
 * 
 *  2. 当服务器想发送一个身份标识给客户端，就通过 set-cookie 这个头信息进行发送，（浏览器）客户端接收到这个头信息，会自动的保存该数据
 * 
 *  3. 客户端每次请求处理一些我们设置的数据，浏览器还会发送一些头信息，这个头信息就包含了当前浏览器存储的所有cookie，把他放在请求头的 cookie 中，发送给服务器，服务器以此来判断客户端的身份
 * 
 * 浏览器每次发送请求的时候，会把 与当前这次请求所在的同一个域下的 cookie，搜集起来，用key=value，多个使用 分号+空格 的形式（如：uid=1; name=Kimoo）放到 头信息 的cookie 字段中，发送给服务端
 */
import VHeader from './components/VHeader'
import VList from './components/VList'
export default {
    data() {
        return {}
    },
    components: {
        VHeader,
        VList
    }
}
</script>