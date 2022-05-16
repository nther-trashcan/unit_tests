import { shallowMount,mount } from '@vue/test-utils';
import AppointmentStatusDropdown from '../../../modules/common/components/AppointmentStatusDropdown';
import 'whatwg-fetch'

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(AppointmentStatusDropdown,{
            propsData: {
                enabled: false,
                value: ["value1","value2","value3"],
                multiple: false,
                label: "label",
                required: false,
                isFromApi: true,
                itemText: "itemText",
                itemText2: "",
                itemValue: "itemValue",
                selectAll: false,
                collapsible: false,
                statusList: {},
                name: "",
              },
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
        expect(wrapper.vm.enabled).toEqual(false)
        expect(wrapper.vm.value).toEqual(["value1","value2","value3"])
        expect(wrapper.vm.multiple).toEqual(false)
        expect(wrapper.vm.label).toEqual("label")
        expect(wrapper.vm.required).toEqual(false)
        expect(wrapper.vm.isFromApi).toEqual(true)
        expect(wrapper.vm.itemText).toEqual("itemText")
        expect(wrapper.vm.itemText2).toEqual("")
        expect(wrapper.vm.itemValue).toEqual("itemValue")
        expect(wrapper.vm.selectAll).toEqual(false)
        expect(wrapper.vm.collapsible).toEqual(false)
        expect(wrapper.vm.statusList).toEqual({})
        expect(wrapper.vm.name).toEqual("")
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.enabled).toEqual('boolean')
        expect(typeof wrapper.vm.value).toEqual('object')
        expect(typeof wrapper.vm.multiple).toEqual('boolean')
        expect(typeof wrapper.vm.label).toEqual('string')
        expect(typeof wrapper.vm.required).toEqual('boolean')
        expect(typeof wrapper.vm.isFromApi).toEqual('boolean')
        expect(typeof wrapper.vm.itemText).toEqual('string')
        expect(typeof wrapper.vm.itemText2).toEqual('string')
        expect(typeof wrapper.vm.itemValue).toEqual('string')
        expect(typeof wrapper.vm.selectAll).toEqual('boolean')
        expect(typeof wrapper.vm.collapsible).toEqual('boolean')
        expect(typeof wrapper.vm.statusList).toEqual('object')
        expect(typeof wrapper.vm.name).toEqual('string')
    })

    it('is mocking function properly',async ()=>{

        wrapper.vm.setArray('value1')
        expect(wrapper.emitted()["on-change"][0]).toEqual(["value1"])
        await wrapper.vm.setAppointmentStatusList()
        
    })


});