import { shallowMount,mount } from '@vue/test-utils';
import MappingInputs from '../../../modules/appointments-migration/components/MappingInputs';

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(MappingInputs,{
            propsData: {
                importCheck:false,
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
        expect(wrapper.vm.importCheck).toEqual(false)   
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.importCheck).toEqual('boolean')    
    })

    it('is mocking function properly',()=>{                          
        const appointmentFrom=["0","1"]
        const appointmentTo="2"
        const statusFrom=["0","1"]
        const statusTo="2"
        wrapper.vm.setAppointmentFrom(appointmentFrom)
        expect(wrapper.vm.form.appointmentFrom).toEqual(appointmentFrom)
        wrapper.vm.setAppointmentTo(appointmentTo)
        expect(wrapper.vm.form.appointmentTo).toEqual(appointmentTo)
        wrapper.vm.setStatusFrom(statusFrom)
        expect(wrapper.vm.form.statusFrom).toEqual(statusFrom)
        wrapper.vm.setStatusTo(statusTo)
        expect(wrapper.vm.form.statusTo).toEqual(statusTo)
        wrapper.setData({
                appointmentTypeList:{content:[{id:"0",name:"appointmentType1"},{id:"2",name:"appointmentType3"}]},
                appointmentStatusList:{content:[{id:"0",name:"appointmentStatus1"},{id:"2",name:"appointmentStatus3"}]}
            })
        wrapper.vm.addTypeTableData()
        console.log(wrapper.vm.typeTableData)
        wrapper.vm.addStatusTableData()
        expect(wrapper.vm.typeTableData[0].old.id).toEqual("0")
        expect(wrapper.vm.typeTableData[0].old.name).toEqual("appointmentType1")
        expect(wrapper.vm.typeTableData[0].new.id).toEqual("2")
        expect(wrapper.vm.typeTableData[0].new.name).toEqual("appointmentType3")
        expect(wrapper.vm.statusTableData[0].old.id).toEqual("0")
        expect(wrapper.vm.statusTableData[0].old.name).toEqual("appointmentStatus1")
        expect(wrapper.vm.statusTableData[0].new.id).toEqual("2")
        expect(wrapper.vm.statusTableData[0].new.name).toEqual("appointmentStatus3")
        const type={old:{id:"0",name:"appointmentType1"},new:{id:"2",name:"appointmentType3"}}
        const status={old:{id:"0",name:"appointmentStatus1"},new:{id:"2",name:"appointmentStatus3"}}
        wrapper.vm.deleteType(type)
        wrapper.vm.deleteStatus(type)    
    })
});