import { handleContactForm } from "@/lib/actions";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

const initialState = { success: false, error: null };
export const useForm=()=>{
const [state, formAction] = useActionState(handleContactForm, initialState);
  useEffect(() => {
    if (state.success) {
      toast.success("Message sent successfully!");
      return;
    }
    toast.error(state.error);
  }, [state]);

  return {formAction}
}
