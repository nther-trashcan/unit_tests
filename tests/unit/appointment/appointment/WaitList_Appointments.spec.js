import { shallowMount,mount } from '@vue/test-utils';
import Waitlist from '../../../../modules/appointment/components/appointment/Waitlist';
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(Waitlist,{
            propsData:{
                tableData: [],
                locations: [],
                activityTypes: [],
                appointmentTypes: [],
                resetTable: false,
                // timezone: { type: String, default: null },
                multiselect: false,
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
        expect(wrapper.vm.tableData).toEqual([])   
        expect(wrapper.vm.locations).toEqual([])   
        expect(wrapper.vm.activityTypes).toEqual([])   
        expect(wrapper.vm.appointmentTypes).toEqual([])   
        expect(wrapper.vm.resetTable).toEqual(false)   
        expect(wrapper.vm.multiselect).toEqual(false)   
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.tableData).toEqual("object")
        expect(typeof wrapper.vm.locations).toEqual("object")
        expect(typeof wrapper.vm.activityTypes).toEqual("object")
        expect(typeof wrapper.vm.appointmentTypes).toEqual("object")
        expect(typeof wrapper.vm.resetTable).toEqual("boolean")
        expect(typeof wrapper.vm.multiselect).toEqual("boolean")
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
        expect(wrapper.vm.disableEditDelete({from:"2022/04/30"})).toEqual(true)
        wrapper.vm.clickItem({id:"0",name:"item1"})
        expect(wrapper.emitted()["appointment-click"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["appointment-click"][0][0].name).toEqual("item1")
        expect(wrapper.emitted()["appointment-click"][0][1]).toEqual(true)
        wrapper.setData({
            confirmDialogMessage:"",
            confirmDialogConfirmButtonText:"",
            confirmDialogCancelButtonText:"",
            confirmDialogKey:""
        })
        expect(wrapper.vm.confirmDialogMessage).toEqual("")
        expect(wrapper.vm.confirmDialogConfirmButtonText).toEqual("")
        expect(wrapper.vm.confirmDialogCancelButtonText).toEqual("")
        expect(wrapper.vm.confirmDialogKey).toEqual("")
        expect(wrapper.vm.dialog).toEqual(false)
        wrapper.vm.bulkAction("")
        expect(wrapper.vm.confirmDialogMessage).toEqual("Are you sure you want to delete ?")
        expect(wrapper.vm.confirmDialogConfirmButtonText).toEqual("delete")
        expect(wrapper.vm.confirmDialogCancelButtonText).toEqual("cancel")
        expect(wrapper.vm.confirmDialogKey).toEqual("delete-all")
        expect(wrapper.vm.dialog).toEqual(true)
        wrapper.vm.setSelectedRecords([{id:"0",name:"record1"},{id:"1",name:"record2"}])
        expect(wrapper.vm.selectedRecord[0].id).toEqual("0")
        expect(wrapper.vm.selectedRecord[0].name).toEqual("record1")
        wrapper.vm.bulkDeleteFunction("","Reason for deletion",true)
        wrapper.setData({
            confirmDialogMessage:"",
            confirmDialogConfirmButtonText:"",
            confirmDialogCancelButtonText:"",
            confirmDialogKey:"",
            dialog:false,
            resetTable:true,
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
        wrapper.vm.confirmDialog("",true,"Reason for deletion")
        expect(wrapper.emitted()["delete"][0][0]).toEqual("0")
        expect(wrapper.emitted()["delete"][0][1]).toEqual("000")
        expect(wrapper.emitted()["delete"][0][2]).toEqual(true)
        expect(wrapper.emitted()["delete"][0][3]).toEqual("Reason for deletion")
        expect(wrapper.vm.dialog).toEqual(false)
        wrapper.vm.cancelConfirmDialog()
        expect(wrapper.vm.dialog).toEqual(false)
        expect(wrapper.vm.dobFormating([{id:0,name:"item1"}])).toEqual("-")
        wrapper.vm.printDocument()
        wrapper.vm.downloadDocument()

    })
});