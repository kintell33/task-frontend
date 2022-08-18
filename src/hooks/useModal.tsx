import { useContext } from "react";
import { context } from "../App";

export default function useModal() {
  let contextData = useContext(context);

  const showModal = (
    title: string,
    data: string,
    onAccept: (id:string) => void,
    onClose: () => void
  ) => {
    let modal = contextData?.appData.modal;
    modal.show = true;
    modal.title = title;
    modal.data = data;
    modal.onAccept = onAccept;
    modal.onClose = onClose;
    contextData?.setAppData({ ...contextData?.appData, modal });
  };

  const hideModal = () => {
    console.log('hiding modal!');
    let modal = contextData?.appData.modal;
    modal.show = false;
    contextData?.setAppData({ ...contextData?.appData, modal });
  };

  return [showModal, hideModal] as const;
}
