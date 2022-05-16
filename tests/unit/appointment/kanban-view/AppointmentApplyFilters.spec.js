import { shallowMount,mount } from '@vue/test-utils';
import AppointmentApplyFilters from '../../../../modules/appointment/components/kanban-view/AppointmentApplyFilters';
import 'whatwg-fetch';


describe('Component', () => {
    let wrapper;
    const VueStubForm={
        render:()=>{},
        methods:{
            reset:()=>{}
        }

    }
    
    beforeEach(() => {
        wrapper = shallowMount(AppointmentApplyFilters,{
            propsData: {
                locationIds: [],
                groupSessionParams:"",
                updateGroupSession: false,
                patientList: {},
                typeList: {},
                statusList: {},
                patientView: false
              },
            stubs:{
                VForm:VueStubForm
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
        expect(wrapper.vm.locationIds).toEqual([])
        expect(wrapper.vm.groupSessionParams).toEqual("")    
        expect(wrapper.vm.updateGroupSession).toEqual(false)
        expect(wrapper.vm.patientList).toEqual({})    
        expect(wrapper.vm.typeList).toEqual({})
        expect(wrapper.vm.statusList).toEqual({})    
        expect(wrapper.vm.patientView).toEqual(false)    
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.locationIds).toEqual('object')
        expect(typeof wrapper.vm.groupSessionParams).toEqual('string')    
        expect(typeof wrapper.vm.updateGroupSession).toEqual('boolean')
        expect(typeof wrapper.vm.patientList).toEqual('object')    
        expect(typeof wrapper.vm.typeList).toEqual('object')
        expect(typeof wrapper.vm.statusList).toEqual('object')    
        expect(typeof wrapper.vm.patientView).toEqual('boolean')    
    })

    it('is mocking function properly',()=>{
        wrapper.vm.setAppointmentStatusId(["0","1","2"])
        expect(wrapper.vm.applyFilterFormData.appointmentStatusIds).toEqual(["0","1","2"])
        wrapper.vm.setAppointmentTypeId(["0","1"])
        expect(wrapper.vm.applyFilterFormData.appointmentTypesIds).toEqual(["0","1"])
        wrapper.vm.setPatients([["0","1","3"]])
        expect(wrapper.vm.applyFilterFormData.patientIds[0]).toEqual(["0","1","3"])
        wrapper.vm.applyFilter()
        wrapper.vm.setResourceValue(["0","3","5"])
        expect(wrapper.vm.applyFilterFormData.resourceTypesIds).toEqual(["0","3","5"])
        expect(wrapper.vm.applyFilterFormData.telehealthVisit).toEqual(false)
        wrapper.vm.setTelehealth(true)
        expect(wrapper.vm.applyFilterFormData.telehealthVisit).toEqual(true)
        wrapper.vm.resetApplyFilter()
        expect(wrapper.emitted()["on-filter-apply"][0][0].appointmentStatusIds).toEqual([])
        expect(wrapper.emitted()["on-filter-apply"][0][0].appointmentTypesIds).toEqual([])
        expect(wrapper.emitted()["on-filter-apply"][0][0].patientIds).toEqual([])
        expect(wrapper.emitted()["on-filter-apply"][0][0].resourceTypesIds).toEqual([])
        expect(wrapper.emitted()["on-filter-apply"][0][0].groupSession).toEqual(false)
        expect(wrapper.emitted()["on-filter-apply"][0][0].telehealthVisit).toEqual(false)
        wrapper.vm.getGroupSessionList()

    })
});