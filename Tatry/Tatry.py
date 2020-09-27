#!/usr/bin/env python
# -*- coding: utf-8 -*-
from GraphDic import tatry_hard, tatry_medium, tatry_easy
from choices import point_choices
from GraphSearch import bfs

def tatry_v1():
    def target_point_list(level):
        target_list = []
        for number, point in point_choices.items():
            if tatry.graph_dict[point].target == True:
                for i in tatry.graph_dict[point].edges:
                    if (tatry.graph_dict[point].edges[i])[1] <= level:
                        if number not in target_list:
                            target_list.append(number)
        return target_list

    def chose_level():
        print('\n')
        level = input('Na początku musimy wybrać poziom trudności twojej trasy, \n'
              'podaj cyfrę przypisaną do twoich możliwości: \n'
              '1 - aby wybrać poziom początkujący, \n'
              '2 - aby wybrać poziom średniozaawansowany, \n'
              '3 - aby wybrać poziom zaawansowany.\n')
        if level == '1':
            tatry = tatry_easy
            return tatry, 0
        if level == '2':
            tatry = tatry_medium
            return tatry, 1
        if level == '3':
            tatry = tatry_hard
            return tatry, 2
        else:
            print('\n')
            print('Wybacz, twój wybór jest błędny, spróbuj jeszcze raz.\n')
            return chose_level()

    def greet():
        print ('Witaj w projekcie TATRY!\n'
      '\n'
      'Za chwile pomożemy Ci wybrać odpowiednią dla Ciebie ścieżkę\n'
      'w Tatrach.\n'
      '\n'
      'Zanim zaczniesz pamiętaj że program jest na razie tylko prototypem.\n'
      'Przed każdą przygodą sprawdź aktualna prognozę pogody.\n')

    def set_start_and_target(start_point = None, target_point = None):
        if start_point == None and target_point == None:
            start_or_target = input('Czas aby zadecydować od którego wyboru zaczynamy.\n'
                           'Wpisz numer przypisany do twojej preferencji:\n'
                           '1 - jeśli chcesz wybrać miejsce startowe\n'
                           '2 - jeśli chcesz wybrać cel podróży\n')
            if start_or_target == '1':
                start_point = get_start()
                target_point = get_target(chose_time(start_point))
                return start_point, target_point
            if start_or_target == '2':
                target_point = get_target()
                start_point = get_start(chose_time(None, target_point))
                return start_point, target_point
            else:
                print('\n')
                print('Coś poszło nie tak.\n'
                      'Spróbuj jeszcze raz.\n')
                return set_start_and_target(start_point, target_point)
        elif start_point != None:
            target_point = get_target(chose_time(start_point))
            return start_point, target_point
        elif target_point != None:
            start_point = get_start(chose_time(None, target_point))
            return start_point, target_point

    def get_start(list = None):
        if list == None:
            print('\n')
            in_mountain = input('Czy jesteś obecnie w górach ?\n'
                                    'y/n (wpisz y aby zatwierdzić lub n aby odrzucić):')
            if in_mountain.upper() == 'Y':
                print('\n')
                if_pttk = input('Czy znajdujesz się w schronisku?\n'
                                    'y/n:')
                if if_pttk.upper() == 'Y':
                    pttk_point_string = ''
                    for number, point in point_choices.items():
                        if 'PTTK' in point:
                            pttk_point_string += ('{0} - {1}\n'.format(number, point))
                    print('\n')
                    print(pttk_point_string)
                    chose_pttk = int(input('Wybierz numer odpowiedni dla twojego schroniska:'))
                    if chose_pttk in point_choices:
                        if 'PTTK' in point_choices[chose_pttk]:
                            start_point = point_choices[chose_pttk]
                            return start_point
                        else:
                            print('\n')
                            print('Coś poszło nie tak, spróbuj ponownie.\n')
                            return get_start()
                    else:
                        print('\n')
                        print('Coś poszło nie tak, spróbuj ponownie.\n')
                        return get_start()
                if if_pttk.upper() == 'N':
                    point_choices_string = ''
                    for number, point in point_choices.items():
                        if tatry.graph_dict[point].start == True:
                            continue
                        if 'PTTK' in point:
                            continue
                        else:
                            point_choices_string += ('{0} - {1}\n'.format(number, point))
                    print('\n')
                    print(point_choices_string)
                    chose_start_point = int(input('Wybierz cyfre przypisaną do twojego miejsca:'))
                    if chose_start_point in point_choices:
                        if tatry.graph_dict[point_choices[chose_start_point]].start == True or 'PTTK' in point_choices[chose_start_point]:
                            print('\n')
                            print('Coś poszło nie tak, spróbuj ponownie.\n')
                            return get_start()
                        else:
                            start_point = point_choices[chose_start_point]
                            return start_point
                else:
                    print('\n')
                    print('Coś poszło nie tak, spróbuj ponownie.\n')
                    return get_start()
            if in_mountain.upper() == 'N':
                start_point_string = ''
                for number, point in point_choices.items():
                    if tatry.graph_dict[point].start == True:
                        start_point_string += ('{0} - {1}\n'.format(number, point))
                print('\n')
                print(start_point_string)
                chose_start_point = int(input('Wybierz cyfre przypisaną do miejsca z którego chcesz wyruszyć:'))
                if chose_start_point in point_choices:
                    if tatry.graph_dict[point_choices[chose_start_point]].start == True:
                        start_point = point_choices[chose_start_point]
                        return start_point
                    else:
                        print('\n')
                        print('Coś poszło nie tak, spróbuj ponownie.\n')
                        return get_start()
                else:
                    print('\n')
                    print('Coś poszło nie tak, spróbuj ponownie.\n')
                    return get_start()
            else:
                print('\n')
                print('Coś poszło nie tak, spróbuj ponownie.\n')
                return get_start()
        else:
            start_string = ''
            for number in list:
                start_string += ('{0} - {1}\n'.format(number, point_choices[number]))
            print('\n')
            print(start_string)
            chose_start = int(input('Wybierz cyfre przypisaną do miejsca z którego chcesz wyruszyć.:'))
            if chose_start in list:
                start_point = point_choices[chose_start]
                return start_point
            else:
                print('\n')
                print('Coś poszło nie tak, spróbuj ponownie.\n')
                return get_start(list)

    def chose_time(start_point = None, target_point = None):
        if start_point != None:
            time_for_target = {}
            for patch in target_point_list(level):
                try:
                    time_for_target[patch] = bfs(tatry.graph_dict, tatry.graph_dict[start_point].value, tatry.graph_dict[point_choices[patch]].value)[1]
                except TypeError:
                    continue
            short = []
            middle = []
            long = []
            for number, time in time_for_target.items():
                if time <= 60:
                    short.append(number)
                elif time > 60 and time <= 180:
                    middle.append(number)
                elif time > 180 and time <= 360:
                    long.append(number)
            print('\n')
            chose_time = input('Dla wybranych parametrów znaleźliśmy:\n'
                               '1) ' + str(len(short)) + ' krótkich wycieczek o czasie równym maxymalnie 60 min w jedną stroę,\n'
                               '2) ' + str(len(middle)) + ' wycieczek w przedziale od 60 min do 180 min w jedną stronę,\n'
                               '3) ' + str(len(long)) + ' wycieczek długich trwających do 360 min w jedną stronę.\n'
                               '\n'
                               'Wybierz cyfrę odpowiednią dla twoich preferencji:')
            if chose_time == '1':
                return short
            if chose_time == '2':
                return middle
            if chose_time == '3':
                return long
            else:
                print('\n')
                print('Coś poszło nie tak, spróbuj ponownie.\n')
                return chose_time(start_point)
        if target_point != None:
            time_for_target = {}
            start_point_list = []
            for number, point in point_choices.items():
                if tatry.graph_dict[point].start == True:
                    if number not in start_point_list:
                        start_point_list.append(number)
            for patch in start_point_list:
                try:
                    time_for_target[patch] = bfs(tatry.graph_dict, tatry.graph_dict[point_choices[patch]].value, tatry.graph_dict[target_point].value)[1]
                except TypeError:
                    continue
            short = []
            middle = []
            long = []
            for number, time in time_for_target.items():
                if time <= 60:
                    short.append(number)
                elif time > 60 and time <= 180:
                    middle.append(number)
                elif time > 180 and time <= 360:
                    long.append(number)
            print('\n')
            chose_time = input('Dla wybranego celu znaleźliśmy:\n'
                               '1) ' + str(len(short)) + ' punktów startowych oddalonych nie więcęj niż 60 min od celu,\n'
                               '2) ' + str(len(middle)) + ' punktów z których można osiągnąć cel w czasie między 60 a 180 min,\n'
                               '3) ' + str(len(long)) + ' punktów które są w odległości nie większej niż 360 min.\n'
                               'Wybierz cyfrę przypisaną do interesującej cię odległości:')
            if chose_time == '1':
                return short
            if chose_time == '2':
                return middle
            if chose_time == '3':
                return long
            else:
                print('\n')
                print('Coś poszło nie tak, spróbuj ponownie.\n')
                return chose_time(None, target_point)

    def get_target(list = None):
        if list == None:
            list = target_point_list(level)
            target_string = ''
            for number in list:
                target_string += ('{0} - {1}\n'.format(number, point_choices[number]))
            print('\n')
            print(target_string)
            chose_target = int(input('Wybierz cyfrę odpowiednią dla twojego celu:'))
            if chose_target in list:
                target_point = point_choices[chose_target]
                return target_point
            else:
                print('\n')
                print('Coś poszło nie tak, spróbuj ponownie.\n')
                return get_target()
        else:
            target_string = ''
            for number in list:
                target_string += ('{0} - {1}\n'.format(number, point_choices[number]))
            print('\n')
            print(target_string)
            chose_target = int(input('Wybierz cyfrę odpowiednią dla twojego celu:'))
            if chose_target in list:
                target_point = point_choices[chose_target]
                return target_point
            else:
                print('\n')
                print('Coś poszło nie tak, spróbuj ponownie.\n')
                return get_target(list)

    def back(start_point, target_point):
        print('\n')
        chose_back = input('To już prawie koniec!\n'
                               'Pora wybrać drogę powrotną, czy chcesz wracać tą samą trasą ?\n'
                               'y/n:')
        if chose_back.upper() == 'Y':
            memory = start_point
            start_point = target_point
            target_point = memory
            return start_point, target_point
        if chose_back.upper() == 'N':
            print('\n')
            point_or_pttk = input('W takim razie gdzie chciałbyś się udać ?\n'
                                  '1) Do jednego z punktów startowych,\n'
                                  '2) Do schroniska PTTK\n'
                                  '3) Chce kontynuować wycieczkę do innego celu\n'
                                  'Wybierz cyfrę przypisaną do twojej odpowiedzi:')
            if point_or_pttk == '1':
                new_target = None
                new_target_list= []
                for number, point in point_choices.items():
                    if tatry.graph_dict[point].start == True:
                        new_target_list.append(number)
                time_for_new = {}
                for target in new_target_list:
                    try:
                        time_for_new[target] = bfs(tatry.graph_dict, tatry.graph_dict[target_point].value,
                                                 tatry.graph_dict[point_choices[target]].value)[1]
                    except TypeError:
                        continue
                short = []
                middle = []
                long = []
                for number, time in time_for_new.items():
                    if time <= 60:
                        short.append(number)
                    elif time > 60 and time <= 180:
                        middle.append(number)
                    elif time > 180 and time <= 360:
                        long.append(number)
                print('\n')
                chose_time_b = input('Poniżej widzisz ilość tras dla poszczególnego czasu:\n'
                                   '1) ' + str(len(short)) + ' trasy jeżeli nie chcesz wracać dłużej jak 60 min,\n'
                                   '2) ' + str(len(middle)) + ' trasy dostępnych w przedziale od 60 do 180 min,\n'
                                   '3) ' + str(len(long)) + ' cele do których droga jest dłuższa niż 180 min ale nie przekracza 360 min.\n'
                                    'Wybierz cyfrę odpowiednią dla twoich potrzeb:')
                print('\n')
                if chose_time_b == '1':
                    for number in short:
                        print(('{0} - {1}'.format(number, point_choices[number])))
                if chose_time_b == '2':
                    for number in middle:
                        print(('{0} - {1}'.format(number, point_choices[number])))
                if chose_time_b == '3':
                    for number in long:
                        print(('{0} - {1}'.format(number, point_choices[number])))
                if chose_time_b not in [1,2,3]:
                    print('\n')
                    print('Coś poszło nie tak, spróbuj ponownie.\n')
                    return back(start_point, target_point)
                print('\n')
                chose_new_target = int(input('Wybierz cyfrę przypisaną do wybranego przez Ciebie miejsca:'))
                if chose_new_target in point_choices:
                    if tatry.graph_dict[point_choices[chose_new_target]].start == True:
                        new_target = point_choices[chose_new_target]
                    else:
                        print('\n')
                        print('Coś poszło nie tak, spróbuj ponownie.\n')
                        return back(start_point,target_point)
                start_point = target_point
                target_point = new_target
                return start_point, target_point
            if point_or_pttk == '2':
                new_target = None
                new_target_list = []
                for number, point in point_choices.items():
                    if 'PTTK' in point:
                        new_target_list.append(number)
                time_for_new = {}
                for target in new_target_list:
                    try:
                        time_for_new[target] = bfs(tatry.graph_dict, tatry.graph_dict[target_point].value, tatry.graph_dict[point_choices[target]].value)[1]
                    except TypeError:
                        continue
                short = []
                middle = []
                long = []
                for number, time in time_for_new.items():
                    if time <= 60:
                        short.append(number)
                    elif time > 60 and time <= 180:
                        middle.append(number)
                    elif time > 180 and time <= 360:
                        long.append(number)
                print('\n')
                chose_time_b = input('Poniżej widzisz ilość schronisk dostępnych w danym przedziale czasowym:\n'
                                     '1) ' + str(len(short)) + ' schroniska oddalonych nie wiecęj jak 60 min,\n'
                                     '2) ' + str(len(middle)) + ' schroniska dostępnych w przedziale od 60 do 180 min,\n'
                                     '3) ' + str(len(long)) + ' schroniska do których droga jest dłuższa niż 180 min ale nie przekracza 360 min.\n'
                                     'Wybierz cyfrę odpowiednią dla twoich potrzeb:')
                print('\n')
                if chose_time_b == '1':
                    for number in short:
                        print(('{0} - {1}'.format(number, point_choices[number])))
                if chose_time_b == '2':
                    for number in middle:
                        print(('{0} - {1}'.format(number, point_choices[number])))
                if chose_time_b == '3':
                    for number in long:
                        print(('{0} - {1}'.format(number, point_choices[number])))
                else:
                    print('\n')
                    print('Coś poszło nie tak, spróbuj ponownie.\n')
                    return back(start_point, target_point)
                print('\n')
                chose_pttk = int(input('Wybierz numer odpowiedni dla twojego schroniska:'))
                if chose_pttk in point_choices:
                    if 'PTTK' in point_choices[chose_pttk]:
                        new_target = point_choices[chose_pttk]
                    else:
                        print('\n')
                        print('Coś poszło nie tak, spróbuj ponownie.\n')
                        return back(start_point,target_point)
                start_point = target_point
                target_point = new_target
                return  start_point, target_point
            if point_or_pttk == '3':
                new_target = None
                new_target_list = []
                for number, point in point_choices.items():
                    if tatry.graph_dict[point].target == True:
                        for i in tatry.graph_dict[point].edges:
                            if (tatry.graph_dict[point].edges[i])[1] <= level:
                                if number not in new_target_list:
                                    new_target_list.append(number)
                time_for_new = {}
                for target in new_target_list:
                    try:
                        time_for_new[target] = bfs(tatry.graph_dict, tatry.graph_dict[target_point].value, tatry.graph_dict[point_choices[target]].value)[1]
                    except TypeError:
                        continue
                short = []
                middle = []
                long = []
                for number, time in time_for_new.items():
                    if time <= 60:
                        short.append(number)
                    elif time > 60 and time <= 180:
                        middle.append(number)
                    elif time > 180 and time <= 360:
                        long.append(number)
                print('\n')
                chose_time_b = input('Poniżej widzisz ilość celów dostępnych w danym przedziale czasowym:\n'
                                     '1) ' + str(len(short)) + ' celów oddalonych nie więcej jak 60 min,\n'
                                     '2) ' + str(len(middle)) + ' celów dostępnych w przedziale od 60 do 180 min,\n'
                                     '3) ' + str(len(long)) + ' celów do których droga jest dłuższa niż 180 min ale nie przekracza 360 min.\n'
                                     'Wybierz cyfrę odpowiednią dla twoich potrzeb:')
                print('\n')
                if chose_time_b == 1:
                    for number in short:
                        print(('{0} - {1}'.format(number, point_choices[number])))
                if chose_time_b == 2:
                    for number in middle:
                        print(('{0} - {1}'.format(number, point_choices[number])))
                if chose_time_b == 3:
                    for number in long:
                        print(('{0} - {1}'.format(number, point_choices[number])))
                if chose_time_b not in [1, 2, 3]:
                    print('\n')
                    print('Coś poszło nie tak, spróbuj ponownie.\n')
                    return back(start_point, target_point)
                print('\n')
                chose_target = int(input('Wybierz numer odpowiedni dla twojego nowego celu:'))
                if chose_target in point_choices:
                    if tatry.graph_dict[point_choices[chose_target]].target == True:
                        new_target = point_choices[chose_target]
                    else:
                        print('\n')
                        print('Coś poszło nie tak, spróbuj ponownie.\n')
                        return back(start_point, target_point)
                start_point = target_point
                target_point = new_target
                return  start_point, target_point
            else:
                print('\n')
                print('Coś poszło nie tak, spróbuj ponownie.\n')
                return back(start_point, target_point)
        else:
            print('\n')
            print('Coś poszło nie tak, spróbuj ponownie.\n')
            return back(start_point, target_point)

    def end(into, back, time_into, time_back):
        total = time_into + time_back
        print('\n')
        print('\n')
        print('Gratulacje,\n'
              'Twój plan podróży jest już gotowy.\n'
              'Swoją przygodę zaczynasz w ' + into[0] + ' a zakończysz ją docierając do ' + into[-1] +'\n')
        print('Trasa w tą stronę powinna Ci zająć około ' + str(time_into) + ' min.\n')
        print('Twoja droga powrotna zakończy się w ' + back[-1] + '\n')
        print('Szacowany czas powrotu to ' + str(time_back) + ' min.\n')
        print('\n')
        print('Szczegóły trasy oraz całkowity czas podróży poniżej:\n')
        print('\n')
        for point in into:
            print(point + ' --> \n')
        for point in back:
            if point == back[0]:
                continue
            if point == back[-1]:
                print(point + '.\n')
            else:
                print(point + ' --> \n')
        print('\n')
        print('Całkowity czas podróży = ' + str(total) + ' min.')
        print('\n')
        print('Dziekuję za skorzystanie z naszych usług.\n'
              'Życzę miłej podróży.\n')
        print('\n')
        again = input('Czy chcesz zacząć od nowa?\n'
                      'y/n:')
        if again.upper() == 'Y':
            tatry_v1()
        else:
            print('Tatry 1.0 by Konrad Gacek')

    greet()
    tatry, level = chose_level()
    start_point, target_point = set_start_and_target()
    path1, time1 = bfs(tatry.graph_dict, tatry.graph_dict[start_point].value, tatry.graph_dict[target_point].value)
    print('\n')
    print('Czas podróży = ' + str(time1) + ' min.')
    start_point, target_point = back(start_point, target_point)
    path2, time2 = bfs(tatry.graph_dict, tatry.graph_dict[start_point].value, tatry.graph_dict[target_point].value)
    end(path1, path2, time1, time2)

tatry_v1()
