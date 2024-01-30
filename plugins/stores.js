import { useGeneralStore } from "~/stores/general";
import { useUrlStore } from "~/stores/url";

export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: {
            urlStore : useUrlStore(),
            generalStore : useGeneralStore(),
            userStore : useUserStore(),
        }
    }
})