import itertools

arr1 = ['20','50','100','300','1000']
arr2 = ['16','20','21','24','25']
arr3 = ['T','F']
arr4 = ['0','1','2']
arr5 = ['T','F']
arr6 = ['0.75','1.25']

result = list(itertools.product(arr1,arr2,arr3,arr4,arr5,arr6))

for ele in result:
	print(ele)