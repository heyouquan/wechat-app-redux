import { connect, bindActionCreators } from '../../store/createStore.config'
import { changeText } from '../../store/actions/testAction' // 其中changeText必须是传入一个function

const pageConfig = {
    data: {
        text: 0
    },
    onLoad: function (options) {
        console.log('onLoad')
        // 通过this.xxx获取到action
        // 通过this.data.xxx获取到state
    },
    change: function () {
        this.changeText(this.data.text+1)
    },
    decrement: function () {
        this.changeText(this.data.text - 1)
    }
}

const mapStateToData = state => ({
    // state
    text: state.testReducers.text
})

const mapDispatchToPage = dispatch => (bindActionCreators({
    // actions
    changeText: changeText
}, dispatch))

Page(connect(mapStateToData, mapDispatchToPage)(pageConfig))