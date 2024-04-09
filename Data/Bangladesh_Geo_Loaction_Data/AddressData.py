import os
import sys
import django
import json
from django.conf import settings

""" NOTE:- Run this command to load data on Model

    >> python -m Data.Bangladesh_Geo_Loaction_Data.AddressData

"""

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_setting_core.settings")


# Initialize Django
django.setup()



# Now you can import your models
from apps.core.models import Division, District, Upazila, PostCode



# Get the absolute path to the 'Data' directory
data_directory = os.path.join(settings.BASE_DIR, 'Data', 'Bangladesh_Geo_Loaction_Data')

division_data_directory = os.path.join(data_directory, 'division.json')
district_data_directory = os.path.join(data_directory, 'districts.json')
upazila_data_directory = os.path.join(data_directory, 'upazilas.json')
postalcode_data_directory = os.path.join(data_directory, 'postcodes.json')


# # Get the absolute path to the 'Data' directory
# division_data_directory   = settings.BASE_DIR / 'Data' / 'division.json'

# district_data_directory   = settings.BASE_DIR / 'Data' / 'districts.json'

# upazila_data_directory    = settings.BASE_DIR / 'Data' / 'upazilas.json'

# postalcode_data_directory = settings.BASE_DIR / 'Data' / 'postcodes.json'






# Load Division Data
with open(division_data_directory, 'r', encoding='utf-8') as file:
    div_data = json.load(file)


total_divisions = len(div_data['divisions'])
divisions_processed = 0

print("Inserting Division data......")
for division_data in div_data['divisions']:
    division = Division(
        id      = int(division_data.get('id', 0)),
        name    = division_data.get('name', ''),
        bn_name = division_data.get('bn_name', ''),
        lat     = float(division_data.get('lat', 0.0)),
        long    = float(division_data.get('long', 0.0))
    )
    division.save()

    divisions_processed += 1
    print(f"Progress: {divisions_processed}/{total_divisions} divisions inserted ({divisions_processed / total_divisions * 100:.2f}%)", end='\r')

print("\nDivision data inserted successfully.\n\n")




# Load Districts Data
with open(district_data_directory, 'r', encoding='utf-8') as file:
    dis_data = json.load(file)



total_districts = len(dis_data['districts'])
districts_processed = 0

print("Inserting District data......")
for district_data in dis_data['districts']:
    division_id = int(district_data.get('division_id', 0))
    division = Division.objects.get(id=division_id)

    district = District(
        division = division,
        id       = int(district_data.get('id', 0)),
        name     = district_data.get('name', ''),
        bn_name  = district_data.get('bn_name', ''),
        lat      = float(district_data.get('lat', 0.0)),
        long     = float(district_data.get('long', 0.0))
    )
    district.save()
    districts_processed += 1
    print(f"Progress: {districts_processed}/{total_districts} districts inserted ({districts_processed / total_districts * 100:.2f}%)", end='\r')

print("\nDistrict data inserted successfully.\n\n")




# Load Upazilas Data
with open(upazila_data_directory, 'r', encoding='utf-8') as file:
    upa_data = json.load(file)



total_upazilas = len(upa_data['upazilas'])
upazilas_processed = 0

print("Inserting Upazila data......")
for upazila_data in upa_data['upazilas']:
    district_id = int(upazila_data.get('district_id', 0))
    district = District.objects.get(id=district_id)

    upazila = Upazila(
        district = district,
        id       = int(upazila_data.get('id', 0)),
        name     = upazila_data.get('name', ''),
        bn_name  = upazila_data.get('bn_name', ''),
        lat      = float(upazila_data.get('lat', 0.0)),
        long     = float(upazila_data.get('long', 0.0))
    )
    upazila.save()
    upazilas_processed += 1
    print(f"Progress: {upazilas_processed}/{total_upazilas} upazilas inserted ({upazilas_processed / total_upazilas * 100:.2f}%)", end='\r')

print("\nUpazila data inserted successfully.\n\n")




# Load Post Code Data
with open(postalcode_data_directory, 'r', encoding='utf-8') as file:
    post_data = json.load(file)


total_postcodes = len(post_data['postcodes'])
postcodes_processed = 0

print("Inserting Post Code data......")
for postcode_data in post_data['postcodes']:
    division_id = int(postcode_data.get('division_id', 0))
    district_id = int(postcode_data.get('district_id', 0))

    try:
        division = Division.objects.get(id=division_id)
    except Division.DoesNotExist:
        continue

    try:
        if district_id:
            district = District.objects.get(id=district_id)
        else:
            district = None
    except District.DoesNotExist:
        continue

    postcode = PostCode(
        division   = division,
        district   = district,
        upazila    = postcode_data.get('upazila', ''),
        postOffice = postcode_data.get('postOffice', ''),
        postCode   = float(postcode_data.get('postCode', 0.0))
    )
    postcode.save()
    postcodes_processed += 1
    print(f"Progress: {postcodes_processed}/{total_postcodes} postcodes inserted ({postcodes_processed / total_postcodes * 100:.2f}%)", end='\r')

print("\nPost Code data inserted successfully.\n\n")

