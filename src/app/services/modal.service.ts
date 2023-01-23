import { Injectable } from '@angular/core';
interface IModal{
  id:string,
  visible:boolean
}
@Injectable({
  providedIn: 'root'
})
export class ModalService {
   
  private modals:IModal[]=[];
  private visible=false;

  unregister(id:string){
    this.modals=this.modals.filter(
      element=>element.id!==id
    )
  }

  register(id:string){
    this.modals.push({
      id,visible:false
    });
    console.log(this.modals);
  }

   isModalOpen(id:string){
    return !!this.modals.find(ele=>ele.id===id)?.visible;
   }
    
   isToggle(id:string){
    const modal=this.modals.find(ele=>ele.id===id);
    if(modal){
      modal.visible=!modal.visible;
    }
  

  
  }
}
