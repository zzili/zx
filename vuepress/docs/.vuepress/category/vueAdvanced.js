module.exports = {
  getList(){
    return [
      {
        title: 'Vue 进阶基础',
        collapsable: false,
        children: [
          '00_vue实例',
          '01_vue生命周期',
          '02_数据绑定',
          '03_computed和watch',
          '04_vue的原生指令',
        ]
      },
      {
        title: 'Vue 组件相关',
        collapsable: false,
        children: [
          '05_定义组件',
          '06_组件继承',
          '07_双向绑定',
          '08_高级属性',
          '09_render函数',
        ]
      },
      {
        title: 'Vue-router 路由相关',
        collapsable: false,
        children: [
          '10_router集成',
          '11_router配置',
          '12_router参数传递',
          '13_router高级'
        ]
      },
      {
        title: 'Vuex 相关',
        collapsable: false,
        children: [
          '14_vuex集成',
          '15_state和getters',
          '16_mutation和action',
          '17_vuex模块',
        ]
      },
    ]
  }
}