hour,min = map(int, input().split())
cooktime = int(input())
sum = min+cooktime
if sum >= 60 :
    hour = hour + int(sum/60)
    min = sum % 60
    print(hour, min)

else :
    print(hour, sum)


