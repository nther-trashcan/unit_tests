import { shallowMount,mount } from '@vue/test-utils';
import TableRowTextWithTooltip from '../../../modules/common/components/TableRowTextWithTooltip';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(TableRowTextWithTooltip,{
            propsData:{
                
                    text: "text",
                    maxWidth: "auto",
                    addUnderline: false,
                    cursor: false,
                    redText: false,
                  
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
        expect(wrapper.vm.text).toEqual("text")
        expect(wrapper.vm.maxWidth).toEqual("auto")    
        expect(wrapper.vm.addUnderline).toEqual(false)
        expect(wrapper.vm.cursor).toEqual(false)    
        expect(wrapper.vm.redText).toEqual(false) 
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.text).toEqual('string')
        expect(typeof wrapper.vm.maxWidth).toEqual('string')    
        expect(typeof wrapper.vm.addUnderline).toEqual('boolean')
        expect(typeof wrapper.vm.cursor).toEqual('boolean')    
        expect(typeof wrapper.vm.redText).toEqual('boolean') 
    })
});