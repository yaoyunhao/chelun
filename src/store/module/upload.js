import demo1 from '@/assets/id-a.png';
import demo2 from '@/assets/id-b.png';
import demo3 from '@/assets/licence-a.png';
import demo4 from '@/assets/licence-b.png';
import demo5 from '@/assets/photo.png';
import { cityList, costList } from '@/api/index';
const state = {
    list: [{
        scr: '',
        demo: demo1,
        desc: '身份证正面'
    }, {
        scr: '',
        demo: demo2,
        desc: '身份证反面'
    }, {
        scr: '',
        demo: demo3,
        desc: '驾驶证正页'
    }, {
        scr: '',
        demo: demo4,
        desc: '驾驶证副页'
    }, {
        scr: '',
        demo: demo5,
        desc: '白底半身照'
    }],
    cityList: [],
    costList: [],
    city: [],
    cost: []
}
const mutations = {
    updataList(state, payload) {
        state.list[payload.index].src = payload.src;
    },
    updateState(state, action) {
        state = Object.assign(state, action);
    },
    updateCity(state, action) {
        state.city = action;
    },
    updateCost(state, action) {
        console.log(action);
        state = Object.assign(state, action)
    },
    updateCosts(state, action) {
        state.cost = action;
    }
}
const actions = {
    async getCityList({ commit }) {
        let res = await cityList();
        res.data.forEach(item => {
            item.list.forEach(value => {
                delete value.list;
            })
        })
        commit('updateState', { cityList: res.data })
    },
    async getCostList({ commit }) {
        let proIndex = state.cityList.findIndex(item => item.name == state.city[0]),
            cityIndex = state.cityList[proIndex].list.findIndex(item => item.name == state.city[1]);
        let res = await costList(1, state.cityList[proIndex].id, state.cityList[proIndex].list[cityIndex].id);
        commit('updateCost', { costList: res.data })
        console.log(res.data, '....res');
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}