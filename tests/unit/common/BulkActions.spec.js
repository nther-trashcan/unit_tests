import { shallowMount,mount } from '@vue/test-utils';
import { times } from 'lodash';
import BulkActions from '../../../modules/common/components/BulkActions';


describe('Component', () => {
    let wrapper;

    
    
    beforeEach(() => {
        wrapper = shallowMount(BulkActions,{
            propsData:{
                showDisable: false,
                showEnable: false,
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
        expect(wrapper.vm.showDisable).toEqual(false)
        expect(wrapper.vm.showEnable).toEqual(false)    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.showDisable).toEqual('boolean')    
        expect(typeof wrapper.vm.showEnable).toEqual('boolean')    
    })

    it('is mocking function properly',()=>{
        wrapper.vm.action({id:"0",name:"item"})
        expect(wrapper.emitted().action[0][0].id).toEqual("0")
        expect(wrapper.emitted().action[0][0].name).toEqual("item")
    })
});