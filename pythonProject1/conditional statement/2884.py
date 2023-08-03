hour, min = map(int, input().split())

if min >= 45:
    print(hour, (min-45))
else :
    num = 45 - min
    nhour = hour -1
    if nhour<0: # 0시 에서 -1을 하게 되면 -1시가 아닌 23시가 된다.
        nhour = 23
    print(nhour, (60 - num))


