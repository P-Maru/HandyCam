
count =0
while input('학번 : ')!= '2018038027' :
    count+=1
    if count == 5:
        print('횟수가 초과되었습니다.')
        break
    else:
        print("학번이 올바르지 않습니다.")
if count!=5:print("출입되었습니다.")