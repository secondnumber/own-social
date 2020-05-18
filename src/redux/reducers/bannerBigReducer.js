import Avatar from '../../assets/FriendsPage/avatar.png';
import Flag from '../../assets/FriendsPage/flag.png';
import Facebook from '../../assets/FriendsPage/social/facebook.png';
import Twitter from '../../assets/FriendsPage/social/twitter.png';
import Instagram from '../../assets/FriendsPage/social/instagram.png';
import Twitch from '../../assets/FriendsPage/social/twitch.png';
import Youtube from '../../assets/FriendsPage/social/youtube.png';
import Patreon from '../../assets/FriendsPage/social/patreon.png';
import Discord from '../../assets/FriendsPage/social/discord.png';


let initialState = {
  bannerBigAvatar: Avatar,
  bannerBigName: 'Marina Valentine',
  bannerBigStatus: 'WWW.GAMEHUNTRESS.COM',
  bannerBigStats: [
    {id: 1, posts: 930, friends: 82, visits: 5.7, flag: Flag, country: 'USA'},
  ],
  bannerBigSocial: [
    {id: 1, name: Facebook, hint: 'Facebook'},
    {id: 2, name: Twitter, hint: 'Twitter'},
    {id: 3, name: Instagram, hint: 'Instagram'},
    {id: 4, name: Twitch, hint: 'Twitch'},
    {id: 5, name: Youtube, hint: 'Youtube'},
    {id: 6, name: Patreon, hint: 'Patreon'},
    {id: 7, name: Discord, hint: 'Discord'},

  ],
};

const bannerBigReducer = (state = initialState, action) => {
  return state;
};

export default bannerBigReducer;