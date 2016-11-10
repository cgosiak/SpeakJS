import sys
import RPi.GPIO as GPIO

def main(argument):
	GPIO.setmode(GPIO.BCM)  # set board mode to Broadcom

	GPIO.setup(argument, GPIO.OUT)

	GPIO.output(argument, 1)

main(sys.argv[1])
