import { shallowMount,mount,createLocalVue } from '@vue/test-utils';
import ActivitiesTable from '../../../modules/calendar-template/components/ActivitiesTable';
import DataTable from "../../../modules/common/components/DataTable";
import Vuex from 'vuex'


const localVue=createLocalVue()
localVue.use(Vuex);


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(ActivitiesTable,{
            propsData:{
                tableData:[{frequency:'CUSTOM'},{frequency:'tableData1'},{frequency:'tableData2'},{frequency:'tableData3'}],
                locations:[{id:"0",name:"location1"},{id:"1",name:"location2"},{id:"2",name:"location3"}],
                activityTypes: [{id:"0",name:"activityTypes1"},{id:"1",name:"activityTypes2"},{id:"2",name:"activityTypes3"}],
                appointmentTypes:[{id:"0",name:"appointmentTypes1"},{id:"1",name:"appointmentTypes2"},{id:"2",name:"appointmentTypes3"}],
                customData: [],    
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
        expect(wrapper.vm.tableData).toEqual([{frequency:'CUSTOM'},{frequency:'tableData1'},{frequency:'tableData2'},{frequency:'tableData3'}])    
        expect(wrapper.vm.locations).toEqual([{id:"0",name:"location1"},{id:"1",name:"location2"},{id:"2",name:"location3"}])    
        expect(wrapper.vm.activityTypes).toEqual([{id:"0",name:"activityTypes1"},{id:"1",name:"activityTypes2"},{id:"2",name:"activityTypes3"}])    
        expect(wrapper.vm.appointmentTypes).toEqual([{id:"0",name:"appointmentTypes1"},{id:"1",name:"appointmentTypes2"},{id:"2",name:"appointmentTypes3"}])    
        expect(wrapper.vm.customData).toEqual([])    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.tableData).toEqual('object')
        expect(typeof wrapper.vm.locations).toEqual('object')
        expect(typeof wrapper.vm.activityTypes).toEqual('object') 
        expect(typeof wrapper.vm.appointmentTypes).toEqual('object')
        expect(typeof wrapper.vm.customData).toEqual('object')    
    })

    it('is mocking function properly',()=>{
        
    
        expect(wrapper.vm.getActivityTypeName("")).toEqual("")
        expect(wrapper.vm.getActivityTypeName("0")).toEqual("activityTypes1")
        expect(wrapper.vm.getApointmentType({appointment_type_ids:["0"]})).toEqual('appointmentTypes1')
        expect(wrapper.vm.getApointmentType({appointment_type:[{name:"appointmentTypes1"}]})).toEqual('appointmentTypes1')
        expect(wrapper.vm.getLocations(["0"])).toEqual('location1')
        wrapper.vm.setTableDataCustom()
        expect(wrapper.vm.tableDataCustom[0].frequency).toEqual('tableData1')
        expect(wrapper.vm.getTime('03:00 PM')).toEqual("03:00")
        wrapper.vm.editItem(0,{id:"0",name:"item1"})
        expect(wrapper.emitted()["edit"][0][0]).toEqual(0)
        expect(wrapper.emitted()["edit"][0][1].id).toEqual("0")
        expect(wrapper.emitted()["edit"][0][1].name).toEqual("item1")
        wrapper.vm.deleteItem(1,{id:"1",name:"item2"})
        expect(wrapper.emitted()["delete"][0][0]).toEqual(1)
        expect(wrapper.emitted()["delete"][0][1].id).toEqual("1")
        expect(wrapper.emitted()["delete"][0][1].name).toEqual("item2")
        
        
        

    })
});