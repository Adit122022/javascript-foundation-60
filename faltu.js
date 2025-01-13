let i =0 ; j= 0,k=0, nums1 = [1,2,3,4], nums2 =[3,5,6], a =[];
while(i<nums1.length && j< nums2.length) {
    if(nums1[i] > nums2[j])   a[k++] =nums2[j++]
                    else      a[k++] = nums1[i++]
}
while (i < nums1.length)       a[k++] = nums1[i++]   
while (j < nums2.length)  a[k++] = nums2[j++];

console.log(a)1