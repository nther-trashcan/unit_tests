import { shallowMount,mount } from '@vue/test-utils';
import AutoComplete from '../../../modules/common/components/AutoComplete';
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;
    const VueToastStub = {
        render: () => {},
        methods: {
            resetValidation: () => {},
            validate:()=>{}
        }
      }
    
    beforeEach(() => {
        wrapper = mount(AutoComplete,{
            propsData:{
                label: "label",
                items: ["item1","item2","item3"],
                url: "",
                itemText: "itemText",
                itemText2: "itemText2",
                itemValue: "itemValue",
                selectedItemText: "selectedItemText",
                value: ["value1","value2","value3"],
                multiple: false,
                selectAll: false,
                responseKey: "",
                collapsible: false,
                dataCypress: "calendar_appointment_status_filter",
                disabled:false,
                deletableChips: true,
                chips: true,
                clearable: true,
                width: "100%",
                required: false,
                cssClass: "cssClass",
                menuMaxWidth: "auto",
            },
            stubs: {
                VForm: VueToastStub,
            },
        });
    });
    
    afterEach(() => {
        wrapper.destroy();
    });
    
    it('is a Vue instance', () => {   
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('is mocking data properly',()=>{
        expect(wrapper.vm.label).toEqual("label")
        expect(wrapper.vm.items).toEqual(["item1","item2","item3"])
        expect(wrapper.vm.url).toEqual("")
        expect(wrapper.vm.itemText).toEqual("itemText")
        expect(wrapper.vm.itemText2).toEqual("itemText2")
        expect(wrapper.vm.itemValue).toEqual("itemValue")
        expect(wrapper.vm.selectedItemText).toEqual("selectedItemText")
        expect(wrapper.vm.value).toEqual(["value1","value2","value3"])
        expect(wrapper.vm.multiple).toEqual(false)
        expect(wrapper.vm.selectAll).toEqual(false)
        expect(wrapper.vm.responseKey).toEqual("")
        expect(wrapper.vm.collapsible).toEqual(false)
        expect(wrapper.vm.dataCypress).toEqual("calendar_appointment_status_filter")
        expect(wrapper.vm.disabled).toEqual(false)
        expect(wrapper.vm.deletableChips).toEqual(true)
        expect(wrapper.vm.chips).toEqual(true)
        expect(wrapper.vm.clearable).toEqual(true)
        expect(wrapper.vm.width).toEqual("100%")
        expect(wrapper.vm.required).toEqual(false)
        expect(wrapper.vm.cssClass).toEqual("cssClass")
        expect(wrapper.vm.menuMaxWidth).toEqual("auto")

    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.label).toEqual('string')
        expect(typeof wrapper.vm.items).toEqual('object')
        expect(typeof wrapper.vm.url).toEqual('string')
        expect(typeof wrapper.vm.itemText).toEqual('string')
        expect(typeof wrapper.vm.itemText2).toEqual('string')
        expect(typeof wrapper.vm.itemValue).toEqual('string')
        expect(typeof wrapper.vm.selectedItemText).toEqual('string')
        expect(typeof wrapper.vm.value).toEqual('object')
        expect(typeof wrapper.vm.multiple).toEqual('boolean')
        expect(typeof wrapper.vm.selectAll).toEqual('boolean')
        expect(typeof wrapper.vm.responseKey).toEqual('string')
        expect(typeof wrapper.vm.collapsible).toEqual('boolean')
        expect(typeof wrapper.vm.dataCypress).toEqual('string')
        expect(typeof wrapper.vm.disabled).toEqual('boolean')
        expect(typeof wrapper.vm.deletableChips).toEqual('boolean')
        expect(typeof wrapper.vm.chips).toEqual('boolean')
        expect(typeof wrapper.vm.clearable).toEqual('boolean')
        expect(typeof wrapper.vm.width).toEqual('string')
        expect(typeof wrapper.vm.required).toEqual('boolean')
        expect(typeof wrapper.vm.cssClass).toEqual('string')
        expect(typeof wrapper.vm.menuMaxWidth).toEqual('string')
    })

    it('is mocking function properly',()=>{
        wrapper.vm.getTitle({
            itemText:"dummyItemText1",
            itemText2:"dummyItemText2",
            selectedItemText:"dummySelectedItemText"
        })
        wrapper.vm.toggleSelectAll()
        wrapper.vm.fetchData()
        expect(wrapper.vm.multiple).toEqual(false)
        wrapper.vm.remove({})
        expect(wrapper.vm.selectedValue).toEqual("")
        wrapper.vm.setRules()
        expect(wrapper.vm.selectIcon({attrs:{inputValue:""}})).toEqual("mdi-checkbox-blank-outline")
        wrapper.vm.onInput()
        
    })
});