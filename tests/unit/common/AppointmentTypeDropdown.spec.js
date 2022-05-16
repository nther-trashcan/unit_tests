import { shallowMount,mount } from '@vue/test-utils';
import AppointmentTypeDropdown from '../../../modules/common/components/AppointmentTypeDropdown';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(AppointmentTypeDropdown,{
            propsData: {
                value: ["value1","value2","value3"],
                multiple: false,
                label: "label",
                itemText: "itemText",
                itemValue: "itemValue",
                isFromApi: false,
                disabled: false,
                selectAll: false,
                dataCypress: "calendar_appointment_types_filter" ,
                hideDisabled: true,
                collapsible: false,
                chips: true,
                extraItems:[],
                typeList: [{id:0,name:"appointmentType1"},{id:0,name:"appointmentType1"}],
                required: false,
                location_id: "",
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
        expect(wrapper.vm.value).toEqual(["value1","value2","value3"])
        expect(wrapper.vm.multiple).toEqual(false)
        expect(wrapper.vm.label).toEqual("label")
        expect(wrapper.vm.itemText).toEqual("itemText")
        expect(wrapper.vm.itemValue).toEqual("itemValue")
        expect(wrapper.vm.isFromApi).toEqual(false)
        expect(wrapper.vm.disabled).toEqual(false)
        expect(wrapper.vm.selectAll).toEqual(false)
        expect(wrapper.vm.dataCypress).toEqual("calendar_appointment_types_filter")
        expect(wrapper.vm.hideDisabled).toEqual(true)
        expect(wrapper.vm.collapsible).toEqual(false)
        expect(wrapper.vm.chips).toEqual(true)
        expect(wrapper.vm.extraItems).toEqual([])
        expect(wrapper.vm.typeList).toEqual([{id:0,name:"appointmentType1"},{id:0,name:"appointmentType1"}])
        expect(wrapper.vm.required).toEqual(false)
        expect(wrapper.vm.location_id).toEqual("")
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.value).toEqual('object')
        expect(typeof wrapper.vm.multiple).toEqual('boolean')
        expect(typeof wrapper.vm.label).toEqual('string')
        expect(typeof wrapper.vm.itemText).toEqual('string')
        expect(typeof wrapper.vm.itemValue).toEqual('string')
        expect(typeof wrapper.vm.isFromApi).toEqual('boolean')
        expect(typeof wrapper.vm.disabled).toEqual('boolean')
        expect(typeof wrapper.vm.selectAll).toEqual('boolean')
        expect(typeof wrapper.vm.dataCypress).toEqual('string')
        expect(typeof wrapper.vm.hideDisabled).toEqual('boolean')
        expect(typeof wrapper.vm.collapsible).toEqual('boolean')
        expect(typeof wrapper.vm.chips).toEqual('boolean')
        expect(typeof wrapper.vm.extraItems).toEqual('object')
        expect(typeof wrapper.vm.typeList).toEqual('object')
        expect(typeof wrapper.vm.required).toEqual('boolean')
        expect(typeof wrapper.vm.location_id).toEqual('string')
    })

    it('is mocking function properly',async ()=>{
        wrapper.vm.setArray('value1')
        expect(wrapper.emitted()["on-change"][0]).toEqual(["value1"])
        await wrapper.vm.setAppointmentTypeList()
        expect(wrapper.emitted().data[0][0][0].id).toEqual(0)
        expect(wrapper.emitted().data[0][0][0].name).toEqual('appointmentType1')
        expect(wrapper.vm.appointmentTypeList[0].id).toEqual(0)
        expect(wrapper.vm.appointmentTypeList[0].name).toEqual('appointmentType1')
    })
});