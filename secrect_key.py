import random
import string

def generate_secret_key(length):
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(characters) for _ in range(length))

# Example: Generate a secret key of length 50
secret_key = generate_secret_key(100)
print(secret_key)




"""NOTE: Make Django secret keys by using shell
    >> python manage.py shell

    from django.core.management.utils import get_random_secret_key
    print(get_random_secret_key())

"""

