import { helper } from '@ember/component/helper';

const communityPropertyType = [
 'Condo',
 'Twonhouse',
  'Apartment'
];

export function rentalPropertyType([prepertyType]) {
  if(communityPropertyType.includes(prepertyType)){
    return 'Community';
  }
  return 'Standalone';
}

export default helper(rentalPropertyType);
