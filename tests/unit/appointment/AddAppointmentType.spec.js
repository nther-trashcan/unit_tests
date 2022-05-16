import { shallowMount,mount } from '@vue/test-utils';
import AddAppointmentType from '../../../modules/appointment/components/AddAppointmentType';
import 'whatwg-fetch'

describe('Component', () => {
    let wrapper;
    const VueStubForm={
        render:()=>{},
        methods:{
            validate:()=>{}
        }
    }
    
    beforeEach(() => {
        wrapper = shallowMount(AddAppointmentType,{
            propsData: {
                openModal: false,
                required: false,
                isEdit: false ,
                isEditCopy: false ,
                title: "title",
                maxWidth: "600px",
                closeButtonText: "Close",
                submitButtonText: "Submit",
                url: "",
                editedItem: {},
                errmessage: "",
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
        expect(wrapper.vm.openModal).toEqual(false)
        expect(wrapper.vm.required).toEqual(false)    
        expect(wrapper.vm.isEdit).toEqual(false)
        expect(wrapper.vm.isEditCopy).toEqual(false)    
        expect(wrapper.vm.title).toEqual("title")
        expect(wrapper.vm.maxWidth).toEqual("600px")    
        expect(wrapper.vm.closeButtonText).toEqual("Close")
        expect(wrapper.vm.submitButtonText).toEqual("Submit")    
        expect(wrapper.vm.url).toEqual("")
        expect(wrapper.vm.editedItem).toEqual({})    
        expect(wrapper.vm.errmessage).toEqual("")
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.openModal).toEqual('boolean')
        expect(typeof wrapper.vm.required).toEqual('boolean')    
        expect(typeof wrapper.vm.isEdit).toEqual('boolean')
        expect(typeof wrapper.vm.isEditCopy).toEqual('boolean')    
        expect(typeof wrapper.vm.title).toEqual('string')
        expect(typeof wrapper.vm.maxWidth).toEqual('string')    
        expect(typeof wrapper.vm.closeButtonText).toEqual('string')
        expect(typeof wrapper.vm.submitButtonText).toEqual('string')    
        expect(typeof wrapper.vm.url).toEqual('string')
        expect(typeof wrapper.vm.editedItem).toEqual('object')    
        expect(typeof wrapper.vm.errmessage).toEqual('string')
    })

    it('is mocking function properly',()=>{
        wrapper.vm.setAllLocations([{id:"0",name:"location1"},{id:"1",name:"location2"},{id:"2",name:"location3"}])
        const form={
            id:"0",
            location_ids: ["0","1"],
            name: "appointmentTypeForm1",
            color: "#ffffff",
            description: "This is a description",
            version_id:"0000",
            master_id:"000",
            duration: "00:15",
            is_enabled: true,
            templates: [],
            consentForms: [],
            evaluationForms: [],
            customForms: [],
            time: {
              hr: "00",
              min: "00",
            },
          }
        wrapper.vm.setFormData(form)
        expect(wrapper.vm.appointmentTypeForm.id).toEqual("0")
        expect(wrapper.vm.appointmentTypeForm.location_ids).toEqual(["0","1"])
        expect(wrapper.vm.appointmentTypeForm.name).toEqual("appointmentTypeForm1")
        expect(wrapper.vm.appointmentTypeForm.color).toEqual("#ffffff")
        expect(wrapper.vm.appointmentTypeForm.duration).toEqual("00:15")
        expect(wrapper.vm.appointmentTypeForm.version_id).toEqual("0000")
        expect(wrapper.vm.appointmentTypeForm.master_id).toEqual("000")
        expect(wrapper.vm.getTemplate([{id:"0",document_data:[{name:"data1"}],document_category:"category1"},{id:"1",document_data:[{name:"data2"}],document_category:"category2"}],"category1")).toEqual([undefined])
        expect(wrapper.vm.appointmentTypeForm.time.hr).toEqual("00")
        expect(wrapper.vm.appointmentTypeForm.time.min).toEqual("00")
        wrapper.setData({
            appointmentTypeForm:{
                time:{
                    hr:"03",
                    min:"30"
                }
            }
        })
        wrapper.vm.conversion()
        expect(wrapper.vm.appointmentTypeForm.duration).toEqual(210)
        expect(wrapper.vm.appointmentTypeForm.time.hr).toEqual(3)
        wrapper.vm.colorPickerToggleShow()
        expect(wrapper.vm.toggle).toEqual(true)
        wrapper.vm.colorPickerToggleHide()
        expect(wrapper.vm.toggle).toEqual(false)
        wrapper.vm.setColor("#ffffff")
        expect(wrapper.vm.appointmentTypeForm.color).toEqual("#ffffff")
        wrapper.vm.Submit()
        wrapper.vm.addOrUpdateAppointmentType()
        wrapper.vm.cancelData()
        expect(wrapper.vm.dialog).toEqual(true)
        wrapper.vm.confirmDialog("cancel")
        expect(wrapper.emitted()["close-modal"][0][0]).toEqual(undefined)
        wrapper.vm.cancelConfirmDialog()
        expect(wrapper.vm.dialog).toEqual(false)
        wrapper.vm.submitAndClose()
        expect(wrapper.emitted()["submit"][0][0]).toEqual(undefined)
        wrapper.vm.fetchConsentForms()
        wrapper.vm.fetchEvaluationForms()
        expect(wrapper.vm.convertMinutesToHour(900)).toEqual("15")
        expect(wrapper.vm.convertMinutesToMinute(1000)).toEqual("40")
        wrapper.vm.setDurationOnChange("00:16")
        expect(wrapper.vm.appointmentTypeForm.duration).toEqual("00:16")
        wrapper.vm.setLocations(["0","1","2"])
        expect(wrapper.vm.appointmentTypeForm.location_ids).toEqual(["0","1","2"])

    })
});