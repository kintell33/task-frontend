import { useContext } from 'react';
import { context } from '../App';

export default function useLoading() {
    let contextData = useContext(context);

    const showLoading = () => {
        contextData?.setAppData({...contextData?.appData, loading:true});
    }

    const hideLoading = () => {
        contextData?.setAppData({...contextData?.appData, loading:false});
    }

    return [showLoading, hideLoading] as const;
}