import { shallowMount,mount } from '@vue/test-utils';
import KanbanViewComp from '../../../../modules/appointment/components/kanban-view/KanbanViewComp';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(KanbanViewComp,{
            propsData: {
                appointments: [],
                appointmentStatusList: [],
                appointmentStatusGroups: {},
                backgroundCardName:{},
                timezone:"",
                length: 0,
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
        expect(wrapper.vm.appointmentStatusList).toEqual([])    
        expect(wrapper.vm.appointmentStatusGroups).toEqual({})
        expect(wrapper.vm.backgroundCardName).toEqual({})    
        expect(wrapper.vm.timezone).toEqual("")
        expect(wrapper.vm.length).toEqual(0)    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.appointments).toEqual('object')
        expect(typeof wrapper.vm.appointmentStatusList).toEqual('object')    
        expect(typeof wrapper.vm.appointmentStatusGroups).toEqual('object')
        expect(typeof wrapper.vm.backgroundCardName).toEqual('object')    
        expect(typeof wrapper.vm.timezone).toEqual('string')
        expect(typeof wrapper.vm.length).toEqual('number')    
    })

    it('is mocking function properly',()=>{
        const items={id:"0",name:"item1",patients:[{patient_status:{action:"action",alias:"alias",name:"appointmentStatus1",valid_transition:"transition1"}}]};
        const statusName={id:"0",name:"appointmentStatus1"};
        const testStorage = new Map();
        const event={preventDefault:()=>{},dataTransfer: {
            setData: (key, value) => testStorage.set(key, value),
            getData: (key) => testStorage.get(key)
          },target:{id:"0"}}
        expect(wrapper.vm.showItemsStaues).toEqual([])
        wrapper.vm.showList({id:"0",name:"itemStatus1"})
        expect(wrapper.vm.showItemsStaues).toEqual(["itemStatus1"])
        // wrapper.vm.dragStart(event,items,statusName)
        wrapper.vm.allowDrop(event)
        expect(wrapper.vm.notAllowDrop(event)).toEqual(false)
        expect(wrapper.vm.dropStatusArray).toEqual([])
        expect(wrapper.vm.dargAppointmentId).toEqual(0)
        expect(wrapper.vm.dargAppointmentStatus).toEqual("")
        expect(wrapper.vm.overlay).toEqual(false)
        expect(wrapper.vm.getDuration("2022/05/31 12:00 PM","2099/12/31 12:00 PM")).toEqual(0)
        wrapper.vm.changeAppointmentStatus("0","0","0")
        expect(wrapper.emitted()["on-change-status"][0][0]).toEqual("0")
        expect(wrapper.emitted()["on-change-status"][0][1]).toEqual("0")
        expect(wrapper.emitted()["on-change-status"][0][2]).toEqual("0")
        expect(wrapper.vm.getStyle({id:"0",name:"item1",group_session:true,group_session_occurrence_id:"000"})["border-left"]).toEqual("15px solid#ae10ff")
        expect(wrapper.vm.setValidTransition([{id:"0",name:"transition1"}],[{id:"0",name:"status1"}])).toEqual([])
        wrapper.vm.toChekAllPatientSetToAlertAndAlarm(items,statusName)
        wrapper.vm.setClass({})
        wrapper.vm.setTimer()
        wrapper.vm.showTimer({})
        wrapper.vm.convertMinutes({status_last_update_duration:900})
        wrapper.setData({
            appointmentsList:[{id:"0",name:"item1",patients:[{patient_status:{action:"action",alias:"alias",name:"status1"}}]}]
        })
        wrapper.vm.showHalfAndFullHourGlassCount(statusName,"")
        wrapper.vm.showHalfEmptyHourGlass()
        wrapper.vm.showFullHourGlass()
        expect(wrapper.vm.getPatientLengthByStatus(items,statusName)).toEqual(0)
        expect(wrapper.vm.getPatientIdsByStatusName(items.patients,statusName)).toEqual([])
        // console.log(wrapper.vm.getPatientStatusName(items,statusName))
        wrapper.setData({
            appointmentStatusList:[{id:"0",name:"appointmentStatus1",action:"action",alias:"alias",is_enabled:true,visibility:false}]
        })
        console.log(wrapper.vm.appointmentStatuVisible({id:"0",name:"appointmentStatus1"}))
    })
});