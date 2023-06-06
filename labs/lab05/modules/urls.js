import {accessToken, version, userToken} from "./consts.js";

class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method'
        this.commonInfo = `access_token=${accessToken}&v=${version}`
    }

    getUserInfo(userId, name_case="nom") {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig&${this.commonInfo}&name_case=${name_case}`
    }

    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&filter=friends&fields=photo_400_orig&${this.commonInfo}`
    }

    getFriendsUser(userId) {
        return `${this.url}/friends.get?access_token=${userToken}&user_id=${userId}&name_case=ins&v=5.131&fields=first_name,last_name,photo_400_orig`;
    }
}

export const urls = new Urls()