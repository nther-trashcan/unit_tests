import { shallowMount,mount } from '@vue/test-utils';
import Dropdown from '../../../modules/common/components/Dropdown';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(Dropdown,{
            propsData: {
                label: "label",
                items: [{id:"0",itemValue:"item1"},{id:"1",itemValue:"item2"},{id:"2",itemValue:"item3"}],
                itemText: "name" ,
                itemText2: "" ,
                itemValue: "id" ,
                value: [{id:"0",itemValue:"item1"},{id:"1",itemValue:"item2"}],
                multiple: false ,
                selectAll: false ,
                disabled: false ,
                height: 32 ,
                cssClass: "" ,
                width: "100%" ,
                dataCypress: "dropdown" ,
                clearable: false ,
                required: false ,
                menuMaxWidth: "auto" ,
                requiredAsterisk: true ,
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
        expect(wrapper.vm.label).toEqual("label")
        expect(wrapper.vm.items).toEqual([{id:"0",itemValue:"item1"},{id:"1",itemValue:"item2"},{id:"2",itemValue:"item3"}])    
        expect(wrapper.vm.itemText).toEqual("name")
        expect(wrapper.vm.itemText2).toEqual("")    
        expect(wrapper.vm.itemValue).toEqual("id")
        expect(wrapper.vm.value).toEqual([{id:"0",itemValue:"item1"},{id:"1",itemValue:"item2"}])    
        expect(wrapper.vm.multiple).toEqual(false)
        expect(wrapper.vm.selectAll).toEqual(false)    
        expect(wrapper.vm.disabled).toEqual(false)
        expect(wrapper.vm.height).toEqual(32)    
        expect(wrapper.vm.cssClass).toEqual("")
        expect(wrapper.vm.width).toEqual("100%")    
        expect(wrapper.vm.dataCypress).toEqual("dropdown")
        expect(wrapper.vm.clearable).toEqual(false)    
        expect(wrapper.vm.required).toEqual(false)
        expect(wrapper.vm.menuMaxWidth).toEqual("auto")    
        expect(wrapper.vm.requiredAsterisk).toEqual(true)  
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.label).toEqual('string')
        expect(typeof wrapper.vm.items).toEqual('object')    
        expect(typeof wrapper.vm.itemText).toEqual('string')
        expect(typeof wrapper.vm.itemText2).toEqual('string')    
        expect(typeof wrapper.vm.itemValue).toEqual('string')
        expect(typeof wrapper.vm.value).toEqual('object')    
        expect(typeof wrapper.vm.multiple).toEqual('boolean')
        expect(typeof wrapper.vm.selectAll).toEqual('boolean')    
        expect(typeof wrapper.vm.disabled).toEqual('boolean')
        expect(typeof wrapper.vm.height).toEqual('number')    
        expect(typeof wrapper.vm.cssClass).toEqual('string')
        expect(typeof wrapper.vm.width).toEqual('string')    
        expect(typeof wrapper.vm.dataCypress).toEqual('string')
        expect(typeof wrapper.vm.clearable).toEqual('boolean')    
        expect(typeof wrapper.vm.required).toEqual('boolean')
        expect(typeof wrapper.vm.menuMaxWidth).toEqual('string')    
        expect(typeof wrapper.vm.requiredAsterisk).toEqual('boolean')     
    })

    it('is mocking function properly',()=>{
        expect(wrapper.vm.selectIcon({attrs:{inputValue:""}})).toEqual("mdi-checkbox-blank-outline")
        expect(wrapper.vm.required).toEqual(false)
        wrapper.vm.toggleSelectAll()
        expect(wrapper.vm.selectedValue).toEqual(['0','1','2'])
        wrapper.setData({itemValue:"itemValue",selectedValue:[],required:true})
        wrapper.vm.toggleSelectAll()
        expect(wrapper.vm.selectedValue).toEqual(['item1','item2','item3'])        
        expect(wrapper.vm.required).toEqual(true)
        expect(wrapper.vm.multiple).toEqual(false)
        wrapper.vm.setRules()
        expect(typeof wrapper.vm.rules[0]).toEqual('function')

    })
});