// 获取用户信息
    import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080';
export  let getUserData= ()=>{
    return axios.get('/user');
};
//获取用户列表
export let getUserList = (num=0,number=20)=>{
    return axios.get('https://elm.cangdu.org/v1/users/list?offset='+num+'&limit='+number)
};
//获取总用户
export let getUserListAll=()=>{
    return axios.get('https://elm.cangdu.org/v1/users/count')
};
//获取管理员信息
export let getAdminList = (num=0,number=20)=>{
    return axios.get('https://elm.cangdu.org/admin/all?offset='+num+'&limit='+number)
};
//获取管理员总数量
export let getAdminListAll=()=>{
    return axios.get('https://elm.cangdu.org/admin/count')
};
//获取订单列表信息
export let getOrderList=(num=0,number=20)=>{
    return axios.get('https://elm.cangdu.org/bos/orders?offset='+num+'&limit='+number)
};
//获取所有订单数量
export let getOrderListAll=()=>{
    return axios.get('https://elm.cangdu.org/bos/orders/count')
};
//获取订单详情
export let getOrderListD=(userid,id)=>{
    return axios.get('https://elm.cangdu.org/bos/v1/users/'+userid+'/orders/'+id+'/snapshot')
};
//获取店铺地址
export let getOrderListA=(number)=>{
  return axios.get('https://elm.cangdu.org/shopping/restaurant/'+number+'')
};
//获取食品数量
export let getFood=()=>{
    return axios.get('https://elm.cangdu.org/shopping/v2/foods/count')
};
//获取食品列表
export let getFoodList=(num=0,number=20)=>{
    return axios.get('https://elm.cangdu.org/shopping/v2/foods?offset='+num+'+&limit='+number+'&restaurant_id=undefined')
};
//获取餐馆信息
export let getShoop=(id)=>{
    return axios.get('https://elm.cangdu.org/shopping/restaurant/'+id+'')
};
//获取食品信息
export let getFoodInfo=(id)=>{
    return axios.get('https://elm.cangdu.org/shopping/v2/menu/'+id+'')
}