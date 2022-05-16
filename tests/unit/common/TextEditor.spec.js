import { shallowMount,mount } from '@vue/test-utils';
import TextEditor from '../../../modules/common/components/TextEditor';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(TextEditor,{
            propsData:{
                label: "Datetime",
                value: "textEditorValue",
                id: "",
                rules: [],
                disabled: false,
                limit: 1,
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
        expect(wrapper.vm.label).toEqual("Datetime")
        expect(wrapper.vm.value).toEqual("textEditorValue")    
        expect(wrapper.vm.id).toEqual("")
        expect(wrapper.vm.rules).toEqual([])    
        expect(wrapper.vm.disabled).toEqual(false)
        expect(wrapper.vm.limit).toEqual(1)   
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.label).toEqual("string")
        expect(typeof wrapper.vm.value).toEqual("string")
        expect(typeof wrapper.vm.id).toEqual("string")
        expect(typeof wrapper.vm.rules).toEqual("object")
        expect(typeof wrapper.vm.disabled).toEqual("boolean")
        expect(typeof wrapper.vm.limit).toEqual("number")
    })

    

    it('is mocking function properly',()=>{
        expect(wrapper.vm.inputValue).toEqual("")
        wrapper.vm.setValues()
        expect(wrapper.vm.inputValue).toEqual("textEditorValue")
        wrapper.vm.toggleFocus(Event)
        expect(wrapper.emitted().blur[0][0]).toEqual(Event)
        wrapper.vm.showTooltips()

        
    })
});