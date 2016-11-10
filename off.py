import sys
import RPi.GPIO as GPIO

def main(argument):
	GPIO.setmode(GPIO.BCM)  # set board mode to Broadcom

	GPIO.setup(int(argument), GPIO.OUT)

	GPIO.output(int(argument), 0)

main(sys.argv[1])
