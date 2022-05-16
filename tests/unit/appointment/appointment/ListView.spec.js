import { shallowMount,mount } from '@vue/test-utils';
import ListView from '../../../../modules/appointment/components/appointment/ListView';
import 'whatwg-fetch'

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(ListView,{
            propsData: {
                locations: [],
                activityTypes: [],
                appointmentTypes: [],
                resetTable: false ,
                tableData: ["tableData1","tableData2","tableData3"],
                timezone: "",
                patientView: false ,
                calendarDate: "",
                startDate: "",
                endDate: "",
                filterParams: "",
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
        expect(wrapper.vm.locations).toEqual([])
        expect(wrapper.vm.activityTypes).toEqual([])    
        expect(wrapper.vm.appointmentTypes).toEqual([])
        expect(wrapper.vm.resetTable).toEqual(false)    
        expect(wrapper.vm.tableData).toEqual(["tableData1","tableData2","tableData3"])
        expect(wrapper.vm.timezone).toEqual("")    
        expect(wrapper.vm.patientView).toEqual(false)
        expect(wrapper.vm.calendarDate).toEqual("")    
        expect(wrapper.vm.startDate).toEqual("")
        expect(wrapper.vm.endDate).toEqual("")    
        expect(wrapper.vm.filterParams).toEqual("")
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.locations).toEqual('object')
        expect(typeof wrapper.vm.activityTypes).toEqual('object')    
        expect(typeof wrapper.vm.appointmentTypes).toEqual('object')
        expect(typeof wrapper.vm.resetTable).toEqual('boolean')    
        expect(typeof wrapper.vm.tableData).toEqual('object')
        expect(typeof wrapper.vm.timezone).toEqual('string')    
        expect(typeof wrapper.vm.patientView).toEqual('boolean')
        expect(typeof wrapper.vm.calendarDate).toEqual('string')    
        expect(typeof wrapper.vm.startDate).toEqual('string')
        expect(typeof wrapper.vm.endDate).toEqual('string')    
        expect(typeof wrapper.vm.filterParams).toEqual('string')

    })

    it('is mocking function properly',()=>{
        wrapper.vm.editItem({id:"0",name:"item1",group_session:true,group_session_occurrence_id:"000"})
        expect(wrapper.emitted()["edit-group-session"][0][0]).toEqual("0")
        expect(wrapper.emitted()["edit-group-session"][0][1]).toEqual(true)
        wrapper.vm.editItem({id:"0",name:"item1",group_session:false,group_session_occurrence_id:"000"})
        expect(wrapper.emitted()["edit"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["edit"][0][0].name).toEqual("item1")
        expect(wrapper.emitted()["edit"][0][0].group_session).toEqual(false)
        expect(wrapper.emitted()["edit"][0][0].group_session_occurrence_id).toEqual("000")
        wrapper.vm.disableEditDelete({from:"2022/05/31"})
        wrapper.vm.clickItem({id:"0",name:"item1"})
        wrapper.vm.viewAppointment({id:"0",name:"item1"})
        wrapper.vm.changeBillable({id:"0",name:"item1"})
        wrapper.setData({
            confirmDialogTitle:"",
            confirmDialogMessage:"",
            confirmDialogConfirmButtonText:"",
            confirmDialogCancelButtonText:"",
            confirmDialogKey:"",
            dialog:false,
        })
        wrapper.vm.deleteAppointment({id:"0",name:"item1",master_appointment_id:"000"})
        expect(wrapper.vm.confirmDialogTitle).toEqual("Remove Appointment ?")
        expect(wrapper.vm.confirmDialogMessage).toEqual("Are you sure you want to delete ?")
        expect(wrapper.vm.confirmDialogConfirmButtonText).toEqual("delete")
        expect(wrapper.vm.confirmDialogCancelButtonText).toEqual("cancel")
        expect(wrapper.vm.confirmDialogKey).toEqual("delete")
        expect(wrapper.vm.dialog).toEqual(true)
        expect(wrapper.vm.resetTable).toEqual(false)
        expect(wrapper.vm.deleteItem.id).toEqual("0")
        expect(wrapper.vm.deleteItem.name).toEqual("item1")
        wrapper.vm.confirmDialog("",true,"Reason to be given for deletion")
        expect(wrapper.emitted("delete")[0][0]).toEqual("0")
        expect(wrapper.emitted("delete")[0][1]).toEqual("000")
        expect(wrapper.emitted("delete")[0][2]).toEqual(true)
        expect(wrapper.emitted("delete")[0][3]).toEqual("Reason to be given for deletion")
        expect(wrapper.vm.dialog).toEqual(false)
        wrapper.vm.cancelConfirmDialog()
        expect(wrapper.vm.dialog).toEqual(false)
        wrapper.vm.printDocument()
        wrapper.vm.downloadDocument("csv")
        expect(wrapper.vm.deleteCheck({group_session:true,patientView:true,patients:[]})).toEqual(false)
        expect(wrapper.vm.deleteCheck({group_session:false,patientView:true,patients:[{id:"0",name:"patient1"}]})).toEqual(true)
        wrapper.vm.setOptions([{id:"0",name:"option1"},{id:"1",name:"option2"}])
        expect(wrapper.vm.tableParams[0].id).toEqual("0")
        expect(wrapper.vm.tableParams[0].name).toEqual("option1")

    })
});