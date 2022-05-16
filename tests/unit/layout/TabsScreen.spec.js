import { shallowMount,mount,createLocalVue} from '@vue/test-utils';
import TabsScreen from '../../../modules/layout/components/TabsScreen';
import VueRouter from 'vue-router';

const localVue=createLocalVue();
localVue.use(VueRouter)
const router=new VueRouter([])

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(TabsScreen,{
            localVue,
            router,
            propsData:{
                tabs:""
            }
        });
    });
    
    afterEach(() => {
        wrapper.destroy();
    });
    
    it('is a Vue instance', () => {   
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('is mocking data properly',()=>{
        expect(wrapper.vm.tabs).toEqual("")
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.tabs).toEqual("string")
    })

    it('is mocking function properly',()=>{
        wrapper.vm.tabClicked({})
        wrapper.vm.routerEventTabwithoutMenuLink()
        expect(wrapper.emitted()["tab-router-event"][0][0]).toEqual("")
        wrapper.vm.tabClose({id:"0",name:"tabsInfo"})
        expect(wrapper.emitted()["close-tab"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["close-tab"][0][0].name).toEqual("tabsInfo")
    })
});