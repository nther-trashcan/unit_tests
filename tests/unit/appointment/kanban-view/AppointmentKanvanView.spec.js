import { shallowMount,mount } from '@vue/test-utils';
import AppointmentKanvanView from '../../../../modules/appointment/components/kanban-view/AppointmentKanvanView';
import 'whatwg-fetch'

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(AppointmentKanvanView,{
            propsData: {
                appointments: [],
                timezone: "",
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
        expect(wrapper.vm.appointments).toEqual([])
        expect(wrapper.vm.timezone).toEqual("")    
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.appointments).toEqual('object')
        expect(typeof wrapper.vm.timezone).toEqual('string')
        
    })

    it('is mocking function properly',()=>{
        wrapper.vm.fetchAppointmentStatuses()
        wrapper.vm.applyFilter({id:"0",name:"filterData1"})
        expect(wrapper.vm.applyFilterFormData.id).toEqual("0")
        expect(wrapper.vm.applyFilterFormData.name).toEqual("filterData1")
        wrapper.vm.changeAppointmentStatus("0","0","0")
        wrapper.vm.fetchLocations()
        wrapper.vm.appointmentGroups()
        wrapper.vm.dragBackgroundCardName()
    })
});