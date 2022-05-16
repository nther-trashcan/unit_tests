import { shallowMount,mount } from '@vue/test-utils';
import DaysPicker from '../../../modules/common/components/DaysPicker';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(DaysPicker,{
            propsData: {
                value: [] ,
                dataCypress: "",
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
        expect(wrapper.vm.value).toEqual([])
        expect(wrapper.vm.dataCypress).toEqual("")   
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.value).toEqual('object')
        expect(typeof wrapper.vm.dataCypress).toEqual('string')
           
    })
});